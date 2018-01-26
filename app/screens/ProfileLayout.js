import React from 'react';
import { object } from 'prop-types';
import Meteor, { createContainer } from 'react-native-meteor';

import Profile from './Profile';
import SignUp from './SignUp';

const ProfileLayout = props => {
  if (props.user) {
    return <Profile {...props} />;
  }

  return <SignUp {...props} />;
};

ProfileLayout.propTypes = {
  user: object, // eslint-disable-line
};

export default createContainer(
  () => ({
    user: Meteor.user(),
  }),
  ProfileLayout,
);
