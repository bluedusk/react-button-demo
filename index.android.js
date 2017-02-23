/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './app';

export default class reactBtndemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello</Text>
        <App />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

AppRegistry.registerComponent('reactBtndemo', () => reactBtndemo);
