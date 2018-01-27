import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FindNearMe from '../screens/FindNearMe';
import LocationDetails from '../screens/LocationDetails';
import NearMe from '../screens/NearMe';
import NearMeMap from '../screens/NearMeMap';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ProfileLayout from '../screens/ProfileLayout';
import Profile from '../screens/Profile';

export const HomeStackNav = StackNavigator(
  {
    FindNearMe: {
      screen: FindNearMe,
      navigationOptions: {
        header: () => null,
      },
    },
    LocationDetails: {
      screen: LocationDetails,
      navigationOptions: {
        title: 'Location Details',
      },
    },
    NearMe: {
      screen: NearMe,
      navigationOptions: {
        title: 'Near Me',
      },
    },
    NearMeMap: {
      screen: NearMeMap,
      navigationOptions: {
        title: 'Near Me Map',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const prevGetStateForActionHomeStackNav = HomeStackNav.router.getStateForAction;
HomeStackNav.router = {
  ...HomeStackNav.router,
  getStateForAction(action, state) {
    if (state && action.type === 'ReplaceCurrentScreen') {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
    }
    return prevGetStateForActionHomeStackNav(action, state);
  },
};

export const ProfileStackNav = StackNavigator(
  {
    ProfileLayout: {
      screen: ProfileLayout,
      navigationOptions: {
        title: 'Account',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Account',
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Account',
      },
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Sign In',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

export const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeStackNav,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={28} />
        ),
      },
    },
    Account: {
      screen: ProfileStackNav,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-circle" color={tintColor} size={28} />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
  },
);
