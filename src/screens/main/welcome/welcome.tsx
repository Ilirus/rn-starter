import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import { s } from 'react-native-better-styles';
import Button from '../../../common/button/button';

export class WelcomeScreen extends Component {
  render() {
    return (
      <View style={[s.flx_i, s.bg_grey, s.jcc, s.aic]}>
        <Text style={[s.fs125, s.m075, s.tc]}>Welcome to WelcomeScreen!</Text>
      </View>
    )
  }
}

export default WelcomeScreen
