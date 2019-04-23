import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import { s } from 'react-native-better-styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export class WelcomeScreen extends Component {
  render() {
    return (
      <View style={[s]}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}

export default WelcomeScreen
