import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import { s } from 'react-native-better-styles';
import Button from '../../../common/button/button';

export class WelcomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    return (
      <View style={[s.flx_i, s.bg_grey, s.jcc, s.aic]}>
        <Text style={[s.fs125, s.m075, s.tc]}>Welcome to WelcomeScreen!</Text>
        <Button
          title="Go to SingIn"
          onPress={() => this.props.navigation.navigate('SingIn')}
        />
      </View>
    )
  }
}

export default WelcomeScreen
