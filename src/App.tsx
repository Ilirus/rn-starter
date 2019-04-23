import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { useScreens } from 'react-native-screens';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { WelcomeScreen } from './screens/main/welcome/welcome';

useScreens();

const AppNavigator = createStackNavigator({
  Home: {
    screen: WelcomeScreen
  }
});

export default createAppContainer(AppNavigator);