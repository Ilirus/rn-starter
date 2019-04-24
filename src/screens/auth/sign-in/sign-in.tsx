import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import { s } from 'react-native-better-styles';

export class SingInScreen extends Component {
  render() {
    return (
      <View style={[s.flx_i, s.bg_grey, s.jcc, s.aic]}>
        <Text style={[s.fs125, s.m075, s.tc]}>Welcome to SingInScreen!</Text>
      </View>
    )
  }
}

export default SingInScreen