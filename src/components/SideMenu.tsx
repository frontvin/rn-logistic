import React, {useState} from 'react';
import {Picker, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, CheckBox, Icon } from "react-native-elements";
import { Divider } from 'react-native-elements';
import {RadioButton, Switch} from 'react-native-paper';

export const SideMenu: React.FC<any> = ({navigation}) => {
    const [value, setValue] = useState("metric");
    const [language, setLanguage] = useState("English");
    const [cacheSwitchOn, setCacheSwitchOn] = useState(false);
    const [filterOn, setFilterOn] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={{paddingBottom: 50}}>
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

                {/*<View >*/}
                {/*    <Text style={styles.subTitle}>Units & Measurements</Text>*/}
                {/*    <View style={styles.checkboxContainer}>*/}
                {/*        <CheckBox*/}
                {/*            title={"metric"}*/}
                {/*            containerStyle={styles.checkBox}*/}
                {/*            checkedIcon='dot-circle-o'*/}
                {/*            uncheckedIcon='circle-o'*/}
                {/*            checked={true}*/}
                {/*            titleProps={{style:{color: "#fff"}}}*/}
                {/*        />*/}
                {/*        <CheckBox*/}
                {/*            title={"imperial"}*/}
                {/*            containerStyle={styles.checkBox}*/}
                {/*            checkedIcon='dot-circle-o'*/}
                {/*            uncheckedIcon='circle-o'*/}
                {/*            checked={false}*/}
                {/*            titleProps={{style:{color: "#fff"}}}*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*</View>*/}
                <View style={{flexDirection: "row", alignItems: "center", paddingTop: 5, paddingBottom: 5}}>
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


                <Divider style={styles.divider} />

                <View>
                    <Text style={styles.subTitle}>Language</Text>
                    <Picker
                        selectedValue={language}
                        style={styles.picker}
                        // mode={"dropdown"}
                        onValueChange={(itemValue, itemIndex) =>
                            setLanguage(itemValue)
                        }>
                        <Picker.Item label="English" value="english" />
                        <Picker.Item label="Russian" value="russian" />
                    </Picker>
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
                            {/*<Switch*/}
                            {/*    value={true}*/}
                            {/*    thumbColor={"#56B7E9"}*/}
                            {/*    trackColor={{false:"#000",true: "#fff"}}*/}
                            {/*/>*/}
                            <Text style={{color: "#fff"}}>enabled</Text>
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
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 15}}>
                        <Switch
                            value={filterOn}
                            onValueChange={() => {
                                setFilterOn(!filterOn)
                            }}
                            color={"#56B7E9"}
                        />
                        {/*<Switch*/}
                        {/*    value={true}*/}
                        {/*    thumbColor={"#56B7E9"}*/}
                        {/*    trackColor={{false:"#000",true: "#fff"}}*/}
                        {/*/>*/}
                        <Text style={{color: "#fff"}}>enabled</Text>
                    </View>
                </View>
                <Divider style={styles.divider} />

                <View>
                    <Button
                        title={"Logout"}
                        onPress={() => navigation.navigate("Login")}
                        type="outline"
                        buttonStyle={styles.logOutBtn}
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
        width: 100,
        alignSelf: "center",
        marginTop: 20
    }
});