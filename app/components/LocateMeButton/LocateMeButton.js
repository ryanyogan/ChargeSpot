import React from 'react';
import { func, bool } from 'prop-types';
import { TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles, { ICON_COLOR, ICON_SIZE, UNDERLAY_COLOR } from './styles';

const LocateMeButton = ({ onPress = () => null, loading = false }) => (
  <TouchableHighlight
    style={styles.button}
    onPress={onPress}
    underlayColor={UNDERLAY_COLOR}
    disabled={loading}
  >
    <View style={styles.button}>
      {loading ? (
        <FontAwesome
          name="spinner"
          size={ICON_SIZE}
          color={ICON_COLOR}
          style={styles.icon}
        />
      ) : (
        <Icon
          name="my-location"
          size={ICON_SIZE}
          color={ICON_COLOR}
          style={styles.icon}
        />
      )}
    </View>
  </TouchableHighlight>
);

LocateMeButton.propTypes = {
  onPress: func,
  loading: bool,
};

export default LocateMeButton;
