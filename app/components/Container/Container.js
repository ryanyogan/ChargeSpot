import React from 'react';
import { any, object, bool } from 'prop-types';
import { View, ScrollView } from 'react-native';
import styles from './styles';

const Container = ({ scroll, children, passProps }) => {
  if (scroll === true) {
    return (
      <ScrollView style={styles.scrollView} {...passProps}>
        {children}
      </ScrollView>
    );
  }

  return (
    <View style={styles.view} {...passProps}>
      {children}
    </View>
  );
};

Container.propTypes = {
  scroll: bool,
  children: any, // eslint-disable-line
  passProps: object, // eslint-disable-line
};
