/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import { View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import { func, any } from 'prop-types';

class AlertProvider extends Component {
  static childContextTypes = {
    alertWithType: func,
    alert: func,
  };

  static propTypes = {
    children: any,
  };

  getChildContext = () => ({
    alert: (...args) => this.dropdown.alert(...args),
    alertWithType: (...args) => this.dropdown.alertWithType(...args),
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(this.props.children)}
        <DropdownAlert
          ref={ref => {
            this.dropdown = ref;
          }}
        />
      </View>
    );
  }
}

export default AlertProvider;
