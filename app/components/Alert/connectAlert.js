/* eslint-disable react/prefer-stateless-function */

import { func } from 'prop-types';
import React, { Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

const connectAlert = WrappedComponent => {
  class ConnectedAlert extends Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          alertWithType={this.context.alertWithType}
          alert={this.context.alert}
        />
      );
    }
  }

  ConnectedAlert.contextTypes = {
    alertWithType: func,
    alert: func,
  };

  return hoistNonReactStatic(ConnectedAlert, WrappedComponent);
};

export default connectAlert;
