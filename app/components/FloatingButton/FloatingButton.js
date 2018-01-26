import React from 'react';
import { string, func } from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles, { buttonColor } from './styles';

const FloatingButton = props => (
  <View style={styles.container}>
    <Icon
      raised
      reverse
      name={props.icon || 'map'}
      type="font-awesome"
      color={buttonColor}
      onPress={props.onPress}
    />
  </View>
);

FloatingButton.propTypes = {
  icon: string,
  onPress: func,
};

export default FloatingButton;
