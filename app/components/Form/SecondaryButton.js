import React from 'react';
import { string, func } from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const SecondaryButton = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.secondayButton}>
    <Text styles={styles.secondayButtonText}>{props.title}</Text>
  </TouchableOpacity>
);

SecondaryButton.propTypes = {
  title: string,
  onPress: func,
};

export default SecondaryButton;
