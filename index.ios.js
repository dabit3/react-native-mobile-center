import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import CodePush from 'react-native-code-push';

import Analytics from "mobile-center-analytics";

const user = {
  name: 'Nader Dabit',
  age: 36
}

const CodePushConfig = {
  updateDialog: true,
  installMode: CodePush.InstallMode.IMMEDIATE
}
export default class RNCodePush extends Component {
  checkForUpdates = () => {
    CodePush.sync(CodePushConfig);
    Analytics.trackEvent('Checking for updates');
  }
  trackProperties = () => {
    Analytics.trackEvent('tracking properties', user);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Version 1!
        </Text>
        <Button
          title='Check for Updates'
          onPress={this.checkForUpdates}
        />
        <Button
          title='Track Properties'
          onPress={this.trackProperties}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
  },
});

Analytics.trackEvent('App loaded');

const App = CodePush(CodePushConfig)(RNCodePush);
AppRegistry.registerComponent('RNMobileCenter', () => App);