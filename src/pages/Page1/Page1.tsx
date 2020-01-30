import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import { Search } from "../../components/Search";
import { Divider } from "react-native-elements";
import { Headline, Paragraph, Subheading } from "react-native-paper";
import { Header } from "../../components/Header";

export const Page1: React.FC<any> = ( { navigation }) => {

        return (
            <View style={styles.pageWrapper}>
                <SafeAreaView>
                {/*<Header*/}
                {/*    placement="left"*/}
                {/*    leftComponent={{ icon: 'menu', size: 35, color: '#fff', onPress: () => navigation.openDrawer(), style:{backgroundColor: "#56B7E9"}}}*/}
                {/*    rightComponent={{ icon: 'plus', type: 'font-awesome', size: 35, color: '#fff', onPress: () => {} }}*/}
                {/*    centerComponent={ <Search /> }*/}
                {/*    containerStyle={{*/}
                {/*        backgroundColor: '#3D6DCC',*/}
                {/*        justifyContent: 'space-around',*/}
                {/*        paddingTop: 0,*/}
                {/*        margin:0,*/}
                {/*        height:60*/}
                {/*    }}*/}
                {/*/>*/}

                <Header />
                </SafeAreaView>

                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.heading}>Choose a KN facility for detailed information</Text>
                            <Text style={styles.headerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        </View>

                        <View style={styles.contentContainer}>
                            <View style={styles.leftContainer}>
                                <Headline style={styles.headline}>
                                    KN <Text style={{color: "#56B7E9"}}>Sales</Text>Companion
                                </Headline>
                                <Subheading style={styles.subheading}>
                                    A better conversation.
                                </Subheading>
                                <Paragraph style={styles.text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Paragraph>
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
                                <View style={{paddingBottom: 40}}>
                                    <Text style={styles.sidebarHeading}>Favourites</Text>
                                    <Divider style={styles.divider} />

                                    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate("Page2")}>
                                        <Text style={styles.sidebarHeading}>KN Airfreight Center</Text>
                                        <Text style={styles.sidebarSubHeading}>Munich (MUC) DE</Text>
                                    </TouchableOpacity>
                                    <Divider style={styles.divider} />

                                    <TouchableOpacity style={styles.itemContainer}>
                                        <Text style={styles.sidebarHeading}>Cargo City Sued</Text>
                                        <Text style={styles.sidebarSubHeading}>Frankfurt (FRA) DE</Text>
                                    </TouchableOpacity>
                                    <Divider style={styles.divider} />

                                    <TouchableOpacity style={styles.itemContainer}>
                                        <Text style={styles.sidebarHeading}>RoadHub SW</Text>
                                        <Text style={styles.sidebarSubHeading}>Augsburg DE</Text>
                                    </TouchableOpacity>
                                    <Divider style={styles.divider} />
                                </View>

                                <View>
                                    <Text style={styles.sidebarHeading}>Last Used</Text>
                                    <Divider style={styles.divider} />

                                    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate("Page2")}>
                                        <Text style={styles.sidebarHeading}>KN Office</Text>
                                        <Text style={styles.sidebarSubHeading}>Munich DE</Text>
                                    </TouchableOpacity>
                                    <Divider style={styles.divider} />

                                    <TouchableOpacity style={styles.itemContainer}>
                                        <Text style={styles.sidebarHeading}>KN Cargo Hub</Text>
                                        <Text style={styles.sidebarSubHeading}>Linz AT</Text>
                                    </TouchableOpacity>
                                    <Divider style={styles.divider} />

                                    <TouchableOpacity style={styles.itemContainer}>
                                        <Text style={styles.sidebarHeading}>RoadHub SW</Text>
                                        <Text style={styles.sidebarSubHeading}>Augsburg DE</Text>
                                    </TouchableOpacity>
                                    <Divider style={styles.divider} />
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
    headline: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 25
    },
    subheading: {
        color: "#fff",
        paddingBottom: 15,
        fontSize: 20
    },
    heading: {
       fontSize: 20,
       textAlign: "center",
       fontStyle: "italic",
       color: "#fff",
       paddingTop: 15,
       paddingBottom: 15
    },
    headerText: {
       color: "#586F8C",
       textAlign: "center"
    },
    text: {
        color: "#fff",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 16,
    },
    itemContainer: {
        padding: 5
    },
    sidebarHeading: {
        color: "#BFC8D3",
    },
    sidebarSubHeading: {
        color: "#2D486D"
    },
    divider: {
        backgroundColor: 'grey',
    },
});

