import React from "react";
import {View, Text, Image, StyleSheet, ScrollView, SafeAreaView, Platform} from "react-native";
import {Search} from "../../components/Search";
import {Header} from "react-native-elements";

import { createDrawerNavigator } from 'react-navigation-drawer';

import { SideMenu } from '../../components/SideMenu';

const Drawer = createDrawerNavigator({
    contentComponent: SideMenu
});

export const Page1: React.FC = ({ navigation }) => {

        return (
            <View style={styles.pageWrapper}>
                <SafeAreaView>
                <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer() }}
                    centerComponent={<Search />}
                    containerStyle={{
                        backgroundColor: '#3D6DCC',
                        justifyContent: 'space-around',
                        paddingTop: 0,
                        margin:0,
                        height:60
                    }}
                />
                </SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Page 1 heading</Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <View style={styles.imgContainer}>
                            <Image
                                style={{ width: 150, height: 150 }}
                                source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}>
                            </Image>
                        </View>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <View style={styles.imgContainer}>
                            <Image
                                style={{ width: 150, height: 150 }}
                                source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}>
                            </Image>
                        </View>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <View style={styles.imgContainer}>
                            <Image
                                style={{ width: 150, height: 150 }}
                                source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}>
                            </Image>
                        </View>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </View>

                    {/*<Image source={}/>*/}
                </ScrollView>
            </View>
        )
}

const styles = StyleSheet.create({
    pageWrapper: {
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#072955",
    },
    imgContainer:{
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
       fontSize: 20,
       textTransform: "uppercase",
       fontStyle: "italic",
       color: "#fff",
       paddingTop: 15,
       paddingBottom: 15
    },
    text: {
        color: "#fff",
        fontSize: 16,
   }
});
