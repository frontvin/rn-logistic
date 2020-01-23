import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';

import {Page1} from "./src/pages/Page1/Page1";
import {Login} from "./src/pages/Login/Login";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppStack = createStackNavigator({
        Login: Login,
        Page1: Page1
    },
    {
        initialRouteName: "Login",
        headerMode: "none"
    }
);
const AppContainer = createAppContainer(AppStack);

const App = () => {
  return (
     <AppContainer style={styles.container}/>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});

export default App
