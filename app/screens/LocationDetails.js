import React, { Component } from 'react';
import { Button, Card } from 'react-native-elements';
import { Text } from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import _ from 'lodash';
import { connectAlert } from '../components/Alert';
import colors from '../config/colors';
import Container from '../components/Container';

const CHECKED_IN = 'in';
const CHECKED_OUT = 'out';

class LocationDetails extends Component {
  state = {
    changingStatus: false,
  };

  attemptCheckIn = () => {
    const { location } = this.props;
    let status = CHECKED_IN;
    if (location.checkedInUserId) {
      status = CHECKED_OUT;
    }

    this.setState({ changingStatus: true });
    Meteor.call(
      'Locations.changeCheckIn',
      { locationId: location._id, status },
      err => {
        if (err) {
          this.props.alertWithType('error', 'Error', err.reason);
        }
        this.setState({ changingStatus: false });
      },
    );
  };

  render() {
    const location =
      this.props.location ||
      _.get(this.props, 'navigation.state.params.location', {});

    const userId = _.get(this.props, 'user._id', 'temp');
    const checkedIn = location.checkedInUserId === userId;
    const available = typeof location.checkedInUserId !== 'string';

    let icon = { name: 'check' };
    let title = 'Check In';
    let backgroundColor = colors.primary;

    if (checkedIn) {
      icon = { name: 'close' };
      title = 'Check Out';
      backgroundColor = colors.red;
    } else if (!available) {
      icon = { name: 'close' };
      title = 'Not Available';
    }

    return (
      <Container scroll>
        <Card title={location.station_name}>
          <Text>{location.street_address}</Text>
          <Text>{location.access_days_time}</Text>
          <Button
            raised
            icon={icon}
            title={title}
            backgroundColor={backgroundColor}
            buttonStyle={{ marginVertical: 20 }}
            disabled={!available && !checkedIn}
            onPress={this.attemptCheckIn}
            loading={this.state.changingStatus}
          />
        </Card>
      </Container>
    );
  }
}

const ConnectedLocationDetails = createContainer(params => {
  const location = _.get(params, 'navigation.state.params.location', {});

  Meteor.subscribe('Locations.pub.details', { locationId: location._id });

  return {
    user: Meteor.user(),
    location: Meteor.collection('locations').findOne({ _id: location._id }),
  };
}, LocationDetails);

export default connectAlert(ConnectedLocationDetails);
