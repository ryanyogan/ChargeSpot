import React from 'react';
import { string, bool } from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles, { ICON_SIZE, ICON_COLOR, ICON_SIZE_SMALL } from './styles';

const NotFound = ({ text = 'Not Found', small = false }) => (
  <View style={styles.container}>
    <Icon
      name="alert"
      size={small ? ICON_SIZE_SMALL : ICON_SIZE}
      color={ICON_COLOR}
    />
    <Text style={[styles.text, small && styles.textSmall]}>{text}</Text>
  </View>
);

NotFound.propTypes = {
  text: string,
  small: bool,
};

export default NotFound;
