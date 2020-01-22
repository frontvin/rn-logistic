import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import {TextPage} from "./src/pages/TextPage/TextPage";
import {Header, SearchBar} from "react-native-elements";
import {Search} from "./src/components/Search";

// export default createDrawerNavigator (
//     {
//         Screen1: {
//             screen: Login,
//             navigationOptions: {
//                 drawerLabel: "Login",
//                 drawerIcon: ({ tintColor }) => (
//                     <MaterialIcons name="login" size={24} style={{ color: "tintColor" }} />
//                 )
//             }
//         },
//         Screen2: {
//             screen: TextPage,
//             navigationOptions: {
//                 drawerLabel: "TextPage",
//                 drawerIcon: ({ tintColor }) => (
//                     <MaterialIcons name="text" size={24} style={{ color: "tintColor" }} />
//                 )
//             }
//         }
//     }, {
//         initialRouteName: "Screen1",
//         contentOptionsL:
//     }
//
// )


export default function App() {
  return (
      <SafeAreaView style={styles.container}>
          <Header
              placement="left"
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={<Search />}
              containerStyle={{
                  backgroundColor: '#3D6DCC',
                  justifyContent: 'space-around',
                  paddingTop: 0,
                  margin:0,
                  height:60
              }}
          />
          <TextPage />
      </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});
