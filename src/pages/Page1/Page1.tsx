import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, Platform } from "react-native";
import { Search } from "../../components/Search";
import { Header } from "react-native-elements";
import { Headline, Paragraph} from "react-native-paper";

export const Page1: React.FC<any> = ( { navigation }) => {

        return (
            <View style={styles.pageWrapper}>
                <SafeAreaView>
                <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', size: 35, color: '#fff', onPress: () => navigation.openDrawer() }}
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
                        <View style={styles.headerContainer}>
                            <Text style={styles.heading}>Choose a KN facility for detailed information</Text>
                            <Text style={styles.headerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        </View>

                        <View style={styles.contentContainer}>
                            <View style={styles.leftContainer}>
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

                            <View style={styles.rightContainer}>
                                <View>
                                    <Headline style={styles.underline}>Favourites</Headline>
                                    <Paragraph style={styles.underline} onPress={() => navigation.navigate("Page2")}>Item 1</Paragraph>
                                    <Paragraph style={styles.underline}>Item 2</Paragraph>
                                    <Paragraph style={styles.underline}>Item 3</Paragraph>
                                </View>
                                <View>
                                    <Headline style={styles.underline}>Last Used</Headline>
                                    <Paragraph style={styles.underline}>Item 1</Paragraph>
                                    <Paragraph style={styles.underline}>Item 2</Paragraph>
                                    <Paragraph style={styles.underline}>Item 3</Paragraph>
                                </View>
                            </View>

                        </View>

                    </View>
                </ScrollView>
            </View>
        )
};

const styles = StyleSheet.create({
    pageWrapper: {
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#072955",
    },
    contentContainer: {
      flexDirection: "row"
    },
    leftContainer: {
        width: "75%",
        paddingRight: 40
    },
    rightContainer: {
        width: "25%",

    },
    imgContainer:{
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        width: "60%",
        flexDirection: "column",
        alignSelf: "center",
        paddingBottom: 35
    },
    heading: {
       fontSize: 20,
       textAlign: "center",
       fontStyle: "italic",
       color: "#fff",
       paddingTop: 15,
       paddingBottom: 15
    },
    underline: {
       color: "#fff",
       borderBottomColor: '#fff',
       borderTopColor: "transparent",
       borderLeftColor: "transparent",
       borderRightColor: "transparent",
       borderWidth: 1,
       paddingBottom: 5
    },
    headerText: {
       color: "#586F8C",
       textAlign: "center"
    },
    text: {
        color: "#fff",
        fontSize: 16,
   }
});

