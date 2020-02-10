import React, { useState } from 'react';
import { Dimensions, Picker, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from "react-native-elements";
import { Divider } from 'react-native-elements';
import { RadioButton, Switch } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

export const SideMenu: React.FC<any> = ({navigation}) => {
    const [value, setValue] = useState("metric");
    const [language, setLanguage] = useState("English");
    const [cacheSwitchOn, setCacheSwitchOn] = useState(false);
    const [filterOn, setFilterOn] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.sideMenuContainer}>
                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: Dimensions.get('window').height - 50
                    }}
                >
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>Settings</Text>
                            <Button
                                onPress={() => navigation.closeDrawer()}
                                icon={
                                    <Icon
                                        name={"close"}
                                        size={23}
                                        color="white"
                                    />
                                }
                            />
                        </View>
                        <Divider style={styles.divider} />

                        <View>
                            <Text style={styles.subTitle}>Units & Measurement</Text>
                            <View style={{flexDirection: "row", alignItems: "center", paddingVertical: 5, paddingLeft: 5}}>
                                <RadioButton.Group
                                    onValueChange={value => setValue(value)}
                                    value={value}
                                >
                                    <View style={styles.radioBtnContainer}>
                                        <RadioButton value="metric" color={"#56B7E9"} uncheckedColor={"#fff"}/>
                                        <Text style={{color: "#fff"}}>metric</Text>
                                    </View>
                                    <View style={styles.radioBtnContainer}>
                                        <RadioButton value="imperial" color={"#56B7E9"} uncheckedColor={"#fff"}/>
                                        <Text style={{color: "#fff"}}>imperial</Text>
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </View>


                        <Divider style={styles.divider} />

                        <View>
                            <Text style={styles.subTitle}>Language</Text>
                            {
                                Platform.OS === 'ios' ?
                                    <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
                                        <RNPickerSelect
                                            placeholder={{
                                                label: "Select language",
                                                value: null,
                                            }}
                                            onValueChange={(value, itemIndex)  =>
                                                setLanguage(value)
                                            }
                                            items={[
                                                { label: 'English', value: 'english', key: 1, color: "#000" },
                                                { label: 'Russian', value: 'russian', key: 2, color: "#000" },
                                            ]}
                                            textInputProps={{
                                                color: "#fff",
                                            }}
                                        />
                                    </View>

                                    : <Picker
                                            selectedValue={language}
                                            style={styles.picker}
                                            mode={"dropdown"}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setLanguage(itemValue)
                                            }
                                        >
                                            <Picker.Item label="English" value="english" />
                                            <Picker.Item label="Russian" value="russian" />
                                        </Picker>
                            }

                        </View>
                        <Divider style={styles.divider} />

                        <View>
                            <Text style={styles.subTitle}>Caching for offline-use</Text>
                            <View style={styles.cacheContainer}>
                                <View style={{flexDirection: "row", alignItems: "center"}}>
                                    <Switch
                                        value={cacheSwitchOn}
                                        onValueChange={() => {
                                            setCacheSwitchOn(!cacheSwitchOn)
                                        }}
                                        color={"#56B7E9"}
                                    >

                                    </Switch>
                                    <Text style={{color: "#fff"}}>
                                        {cacheSwitchOn ? "enabled" : "disabled"}
                                    </Text>
                                </View>

                                <Button
                                    title={"Clear cache"}
                                    type={"outline"}
                                    buttonStyle={styles.cacheBtnContainer}
                                    titleStyle={styles.cacheBtnTitle}
                                />
                            </View>
                        </View>
                        <Divider style={styles.divider} />

                        <View>
                            <Text style={styles.subTitle}>Auto-save my filter settings</Text>
                            <View style={styles.cacheContainer}>
                                <View style={{flexDirection: "row", alignItems: "center", }}>
                                    <Switch
                                        value={filterOn}
                                        onValueChange={() => {
                                            setFilterOn(!filterOn)
                                        }}
                                        color={"#56B7E9"}
                                    />
                                    <Text style={{color: "#fff"}}>
                                        { filterOn ? "enabled" : "disabled" }
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Divider style={styles.divider} />
                    </View>


                    <View>
                        <Button
                            title={"Logout"}
                            onPress={() => navigation.navigate("Login")}
                            type="outline"
                            buttonStyle={styles.logOutBtn}
                        />
                    </View>
                </View>

            </SafeAreaView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0E1C30",
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    sideMenuContainer: {
        justifyContent: "space-between",
        paddingBottom: 50,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
    },
    headerTitle: {
        fontSize: 22,
        color: "#fff",
    },
    subTitle: {
        color: '#fff',
        paddingLeft: 15,
        paddingTop: 15
    },
    checkBox: {
        backgroundColor: 'transparent',
        borderColor: "transparent"
    },
    divider: {
        backgroundColor: 'grey',
        marginLeft: 10,
        marginRight: 10
    },
    radioBtnContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    picker: {
        height: 50,
        color: "#fff",
        width: "100%"
    },
    cacheContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15
    },
    cacheBtnContainer: {
        borderColor: "#fff"
    },
    cacheBtnTitle: {
        color: "#fff",
        fontSize: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    logOutBtn: {
        width: "90%",
        alignSelf: "center",
        marginTop: 20
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'green',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});