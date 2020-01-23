import React from 'react';
import {Picker, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, CheckBox, Icon, Slider} from "react-native-elements";
import { Divider } from 'react-native-elements';

export const SideMenu: React.FC<any> = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Settings</Text>
                    <Button
                        onPress={() => navigation.closeDrawer()}
                        icon={
                            <Icon
                                name={"close"}
                                size={15}
                                color="white"
                            />
                        }
                    />
                </View>
                <Divider style={styles.divider} />
                <View >
                    <Text style={styles.subTitle}>Units & Measurements</Text>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            title={"metric"}
                            containerStyle={{backgroundColor: 'transparent', borderColor: "transparent"}}
                            checked={true}
                            titleProps={{style:{color: "#fff"}}}
                        />
                        <CheckBox
                            title={"imperial"}
                            containerStyle={{backgroundColor: 'transparent', borderColor: "transparent"}}
                            checked={false}
                            titleProps={{style:{color: "#fff"}}}
                        />
                    </View>
                </View>
                <Divider style={styles.divider} />
                <View>
                    <Text style={styles.subTitle}>Language</Text>
                    <Picker
                        selectedValue={"sdf"}
                        style={styles.picker}
                        mode={"dropdown"}
                        onValueChange={(itemValue, itemIndex) =>
                            itemValue = "dfsfdsf"
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>


                <Slider
                    value={100}

                />
                <View>
                    <Button
                        title={"Logout"}
                        onPress={() => navigation.navigate("Login")}
                        type="outline"
                        style={styles.logOutBtn}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
};

// TODO styles side menu

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0E1C30",
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
    },
    headerTitle: {
        fontSize: 18,
        color: "#fff"
    },
    subTitle: {
        color: '#fff',
        paddingLeft: 15,
        paddingTop: 15
    },
    divider: {
        backgroundColor: 'grey',
        marginLeft: 10,
        marginRight: 10
    },
    checkboxContainer: {
        flexDirection: "row"
    },
    picker: {
        height: 50,
        color: "#fff",
        width: "100%"
    },
    logOutBtn: {
        width: 70,
        marginLeft: 15
    }
});