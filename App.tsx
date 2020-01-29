import React from 'react';
import { StyleSheet, Platform } from 'react-native';

import { Page1 } from "./src/pages/Page1/Page1";
import { Page2 } from "./src/pages/Page2/Page2";
import { Login } from "./src/pages/Login/Login";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer";
import { SideMenu } from "./src/components/SideMenu";


const AppStack = createStackNavigator({
        Login: Login,
        Page1: Page1,
        Page2: Page2
    },
    {
        initialRouteName: "Login",
        headerMode: "none"
    }
);

const Drawer = createDrawerNavigator({
        Main: {
            screen: AppStack,
        }
    },{
        contentComponent: SideMenu,
    }
);

const AppContainer = createAppContainer(Drawer);

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
