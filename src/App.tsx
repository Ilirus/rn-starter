import React, { Component } from 'react';
import { useScreens } from 'react-native-screens';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { WelcomeScreen } from './screens/main/welcome/welcome';
import './styles';
import { SingInScreen } from './screens/auth/sign-in/sign-in';

useScreens();

const AppNavigator = createStackNavigator({
  Home: {
    screen: WelcomeScreen
  },
  SingIn: {
    screen: SingInScreen
  }
});

export default createAppContainer(AppNavigator);