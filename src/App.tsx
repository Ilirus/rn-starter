import React, { Component } from 'react';
import { useScreens } from 'react-native-screens';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { WelcomeScreen } from './screens/main/welcome/welcome';
import './styles';
import { SingInScreen } from './screens/auth/sign-in/sign-in';

useScreens();

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: WelcomeScreen
    },
    SingIn: {
      screen: SingInScreen,
      path: 'sing-in',
    },
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

const prefix = 'cogdex://';
export default class App extends React.Component {
  render() {
    return <AppContainer uriPrefix={prefix}/>;
  }
}