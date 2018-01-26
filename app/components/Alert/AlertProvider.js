import React, { Component } from 'react';
import { func, any } from 'prop-types';
import { View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

class AlertProvider extends Component {
  static childContextTypes = {
    alertWithType: func,
    alert: func,
  };

  static propTypes = {
    children: any, // eslint-disable-line
  };

  getChildContext() {
    return {
      alert: (...args) => this.dropdown.alert(...args),
      alertWithType: (...args) => this.dropdown.alertWithType(...args),
    };
  }

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
