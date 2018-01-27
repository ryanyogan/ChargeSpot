import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';
import Container from '../components/Container';

class NearMe extends Component {
  subTitle = location => {
    let subtitle = '';
    if (location.street_address) {
      subtitle = location.street_address;
    }

    if (location.access_days_time && subtitle.length) {
      subtitle = `${subtitle} - ${location.access_days_time}`;
    } else if (location.access_days_time) {
      subtitle = location.access_days_time;
    }

    return subtitle;
  };

  render() {
    const { locations } = this.props.navigation.state.params;

    return (
      <Container scroll>
        <List>
          {locations.map(location => (
            <ListItem
              key={location._id}
              title={location.station_name}
              subtitle={this.subTitle(location)}
            />
          ))}
        </List>
      </Container>
    );
  }
}

export default NearMe;
