import React, { Component } from 'react';
import { Accounts } from 'react-native-meteor';
import { Card } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { Input, PrimaryButton, SecondaryButton } from '../components/Form';
import Container from '../components/Container';
import { connectAlert } from '../components/Alert';

class SignUp extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    loading: false,
  };

  handleChangeEmail = email => {
    const { username } = this.state;
    const update = { email };
    const inferredUsername = email.split('@')[0];
    if (username === inferredUsername.slice(0, inferredUsername.length - 1)) {
      update.username = inferredUsername;
    }
    this.setState(update);
  };

  goToSignIn = () => this.props.navigation.navigate('SignIn');

  signUp = () => {
    const { email, username, password, confirmPassword } = this.state;

    if (email.length < 5) {
      return this.props.alertWithType(
        'error',
        'Error',
        'Email address is required.',
      );
    }
    if (username.length === 0) {
      return this.props.alertWithType(
        'error',
        'Error',
        'Username must be a minimum length of 5.',
      );
    }
    if (password.length === 0 || password !== confirmPassword) {
      return this.props.alertWithType(
        'error',
        'Error',
        'Passwords must match.',
      );
    }

    this.setState({ loading: true });

    return Accounts.createUser({ username, email, password }, err => {
      this.setState({ loading: false });

      if (err) {
        return this.props.alertWithType('error', 'Error', err.reason);
      }

      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Profile' })],
      });

      this.props.navigation.dispatch(resetAction);
    });
  };

  render() {
    return (
      <Container scroll>
        <Card>
          <Input
            label="Email"
            keyboardType="email-address"
            placeholder="Please enter your email..."
            onChangeText={this.handleChangeEmail}
            value={this.state.email}
          />
          <Input
            label="Username"
            onChangeText={username => this.setState({ username })}
            placeholder="Please enter your username..."
            value={this.state.username}
          />
          <Input
            label="Password"
            secureTextEntry
            placeholder="Please enter your password..."
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Input
            label="Confirm Password"
            secureTextEntry
            placeholder="Please confirm your password..."
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
          />

          <PrimaryButton
            title="Sign Up"
            loading={this.state.loading}
            onPress={this.signUp}
          />
        </Card>

        <SecondaryButton onPress={this.goToSignIn} title="Sign In" />
      </Container>
    );
  }
}

export default connectAlert(SignUp);
