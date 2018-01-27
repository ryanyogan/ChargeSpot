import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { Input, PrimaryButton, SecondaryButton } from '../components/Form';
import Container from '../components/Container';

class SignUp extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
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

          <PrimaryButton title="Sign Up" />
        </Card>

        <SecondaryButton onPress={this.goToSignIn} title="Sign In" />
      </Container>
    );
  }
}

export default SignUp;
