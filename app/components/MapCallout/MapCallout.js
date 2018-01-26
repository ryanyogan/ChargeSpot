import React from 'react';
import { string, func } from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const MapCallout = props => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props.onPress} style={styles.bubble}>
      <View style={styles.amount}>
        <Text style={styles.headerText}>{props.title}</Text>
        <Text style={styles.text}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

MapCallout.propTypes = {
  title: string,
  description: string,
  onPress: func,
};

export default MapCallout;
