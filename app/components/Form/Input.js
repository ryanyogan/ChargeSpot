import React from 'react';
import { string } from 'prop-types';
import { View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import styles from './styles';

const Input = props => (
  <View>
    <FormLabel>{props.label}</FormLabel>
    <FormInput
      autoCapitalize="none"
      autoCorrect={false}
      inputStyle={styles.input}
      {...props}
    />
  </View>
);

Input.propTypes = {
  label: string,
};

export default Input;
