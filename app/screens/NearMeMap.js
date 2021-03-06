import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import Container from '../components/Container';
import FloatingButton from '../components/FloatingButton';
import MapCallout, {
  styles as mapCalloutStyles,
} from '../components/MapCallout';

class NearMeMap extends Component {
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

  goToLocationDetails = location =>
    this.props.navigation.navigate('LocationDetails', { location });

  replaceScreen = () => {
    const { locations, position } = this.props.navigation.state.params;
    this.props.navigation.dispatch({
      key: 'NearMe',
      type: 'ReplaceCurrentScreen',
      routeName: 'NearMe',
      params: { locations, position },
    });
  };

  render() {
    const { locations, position } = this.props.navigation.state.params;

    return (
      <Container>
        <MapView
          style={{ ...StyleSheet.absoluteFillObject }}
          initialRegion={{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showUserLocation
        >
          {locations.map(location => {
            const [longitude, latitude] = location.location.coordinates;
            return (
              <MapView.Marker
                key={location._id}
                coordinate={{ latitude, longitude }}
              >
                <MapView.Callout
                  style={mapCalloutStyles.calloutContainer}
                  tooltip
                >
                  <MapCallout
                    title={location.station_name}
                    description={this.subTitle(location)}
                    onPress={() => this.goToLocationDetails(location)}
                  />
                </MapView.Callout>
              </MapView.Marker>
            );
          })}
        </MapView>
        <FloatingButton icon="list" onPress={this.replaceScreen} />
      </Container>
    );
  }
}

export default NearMeMap;
