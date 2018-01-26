import React, { Component } from 'react';
import { func } from 'prop-types';
import { connectAlert } from '../components/Alert';
import Container from '../components/Container';
import { Header } from '../components/Text';
import LocateMeButton from '../components/LocateMeButton';

class FindNearMe extends Component {
  static propTypes = {
    alertWithType: func,
  };

  handleGeolocationSuccess = position => {
    console.log(`Lat: ${position.coords.latitude}`);
    console.log(`Long: ${position.coords.longitude}`);
  };

  handleGeolocationError = error =>
    this.props.alertWithType('error', 'Error', error.message);

  goToNearMe = () => {
    navigator.geolocation.getCurrentPosition(
      this.handleGeolocationSuccess,
      this.handleGeolocationError,
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  };

  render() {
    return (
      <Container>
        <LocateMeButton onPress={this.goToNearMe} />
        <Header>Find Nearest Charging Stations</Header>
      </Container>
    );
  }
}

export default connectAlert(FindNearMe);
