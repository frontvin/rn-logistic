import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import { Search } from "../../components/Search";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { TopSettingsBar } from "../../components/TopSettingsBar";

export const Page1: React.FC<any> = ( { navigation }) => {
    const [isNewSearch, setIsNewSearch] = useState(false);
    const [settingsOn, setSettingOn] = useState(false);

    const toggleSettings = () => {
        setSettingOn(!settingsOn)
    };
        return (
            <View style={styles.pageWrapper}>
                <SafeAreaView>
                    <View style={{backgroundColor: "#2D486D"}}>
                        <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                            <TouchableOpacity onPress={ () => navigation.openDrawer() }>
                                <View style={{width: 50, height: 50, backgroundColor: "#56B7E9", justifyContent: "center", alignItems: "center"}}>
                                    <Icon name={'bars'} size={35}></Icon>
                                </View>
                            </TouchableOpacity>

                            <Search toggleSettings={toggleSettings} color={'#fff'}/>

                            <TouchableOpacity onPress={ () => setIsNewSearch(!isNewSearch) }>
                                <View style={{width: 50, height: 50, backgroundColor: "#56B7E9", justifyContent: "center", alignItems: "center"}}>
                                    {
                                        isNewSearch
                                            ? <Icon name={"minus"} size={35} color={'#fff'}></Icon>
                                            : <Icon name={"plus"} size={35} color={'#fff'}></Icon>
                                    }

                                </View>
                            </TouchableOpacity>

                            {
                                isNewSearch
                                    ? <Search toggleSettings={toggleSettings}/>
                                    : null}
                        </View>
                    </View>
                </SafeAreaView>

                <View>
                    {
                        settingsOn ? <TopSettingsBar /> : null
                    }
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.headerContainer}>
                                <Text style={styles.heading}>Choose a KN facility for detailed information</Text>
                                <Text style={styles.headerText}>In the next step, you can add a second facility to highlight synergies or for convenient overview and comparison.</Text>
                            </View>

                            <View style={styles.contentContainer}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.headline}>
                                        KN <Text style={{color: "#56B7E9"}}>Sales</Text>Companion
                                    </Text>
                                    <Text style={styles.subheading}>
                                        A better conversation.
                                    </Text>
                                    <Text style={styles.text}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Text>
                                    <View style={styles.imgContainer}>
                                        <Image
                                            style={{ width: 150, height: 150 }}
                                            source={{uri: 'https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1523028284340-2FY0DO8X58JYL5Z2NF2I/ke17ZwdGBToddI8pDm48kJ6OfUsg79IbcV4YOB-L0yJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyamov21KUb00upTBjz6xK-5957lvgLLFemVzDUABLKbJgjfiUaLHq2TK21hqA4N9s/512px-React-icon.svg.png'}}>
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
                                            source={{uri: 'https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1523028284340-2FY0DO8X58JYL5Z2NF2I/ke17ZwdGBToddI8pDm48kJ6OfUsg79IbcV4YOB-L0yJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyamov21KUb00upTBjz6xK-5957lvgLLFemVzDUABLKbJgjfiUaLHq2TK21hqA4N9s/512px-React-icon.svg.png'}}>
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

            </View>
        )
};

const styles = StyleSheet.create({
    pageWrapper: {
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    container: {
        paddingHorizontal: 50,
        backgroundColor: "#072955",
    },
    contentContainer: {
      flexDirection: "row"
    },
    leftContainer: {
        width: "75%",
        paddingRight: 40,
        paddingBottom: 120
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
        fontSize: 36
    },
    subheading: {
        color: "#fff",
        paddingBottom: 35,
        fontSize: 36
    },
    heading: {
       fontSize: 20,
       textAlign: "center",
       color: "#fff",
       paddingTop: 15,
       paddingBottom: 15
    },
    headerText: {
       color: "#586F8C",
       textAlign: "center",
       alignSelf: "center",
       width: 450,
       fontSize: 16
    },
    text: {
        color: "#fff",
        fontStyle: "italic",
        fontWeight: "bold",
        lineHeight: 22,
        fontSize: 18,
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

