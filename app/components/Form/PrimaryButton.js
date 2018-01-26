import React from 'react';
import { object, bool } from 'prop-types';
import { Button } from 'react-native-elements';
import styles from './styles';

const PrimaryButton = props => {
  if (props.loading) {
    return (
      <Button
        large
        {...props}
        buttonStyle={[
          styles.primaryButton,
          props.buttonStyle && props.buttonStyle,
        ]}
        disabled={props.loading}
        title=""
      />
    );
  }

  return (
    <Button
      large
      {...props}
      buttonStyle={[
        styles.primaryButton,
        props.buttonStyle && props.buttonStyle,
      ]}
    />
  );
};

PrimaryButton.propTypes = {
  buttonStyle: object, // eslint-disable-line
  loading: bool,
};

export default PrimaryButton;
