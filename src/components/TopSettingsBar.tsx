import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Platform, Picker} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Switch} from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";

export const TopSettingsBar: React.FC<any> = () => {

    // locations
    const [language, setLanguage] = useState(0);

    const [locationsActive, setActiveLocation] = useState(
        [
            {name: "Africa", toggleIn: false},
            {name: "Asia Pacific", toggleIn: false},
            {name: "Europe", toggleIn: false},
            {name: "Middle East", toggleIn: false},
            {name: "North America", toggleIn: false},
            {name: "South and Central America", toggleIn: false},
        ]
    );

    const values = ['Choose Country (optional)', 'Turkey', 'Russia', 'Iran'];

    const setActiveLocationState = (val, ind) => {
        setActiveLocation((prev) => {
            const newLocations = [...prev];
            newLocations[ind].toggleIn = !newLocations[ind].toggleIn;
            return newLocations
        })
    };

    const locationItem = ({item, index} ) => (
        <View style={{flexDirection: "row", width: item.toggleIn ? 800 : 400}}>
            <View style={[styles.column, { borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: "#fff", paddingVertical: 1}]}>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: 5,
                        paddingBottom: 5,
                    }}
                    onPress={(item)=>{
                        setActiveLocationState(item, index);
                    }}
                >
                    {
                        item.toggleIn ?
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <Icon name={"check"} color={"#56B7E9"} size={15}></Icon>
                                <Text style={{color: "#fff", fontSize: 16, paddingLeft: 15}}>{item.name}</Text>
                            </View>

                        :   <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", flex: 1}}>
                                <Text style={{color: "#fff", fontSize: 16}}>{item.name}</Text>
                                <Icon name={"chevron-right"} color={"#56B7E9"} size={15}></Icon>
                            </View>

                    }
                </TouchableOpacity>
            </View>
            {
            item.toggleIn ?
            <View style={[styles.column, {flex:1, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: "#fff"}]}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: 5,
                        paddingBottom: 5,
                    }}
                >
                    {
                        Platform.OS === 'ios' ?
                            <RNPickerSelect
                                onValueChange={(itemValue, itemIndex)  =>
                                    setLanguage(itemValue)}
                                items={[
                                    { label: 'English', value: 'english' },
                                    { label: 'Russian', value: 'russian' },
                                ]}
                                placeholder={"Choose Country (optional)"}
                            />
                            : <Picker
                                selectedValue={language}
                                style={[styles.picker, {display: "flex"}]}
                                mode={"dropdown"}
                                onValueChange={(itemValue, itemIndex) =>
                                    setLanguage(itemValue)
                                }
                            >
                                {values
                                    .filter((value, index) => language === 0 ? value : index === 0 ? false : value)
                                    .map((value, index) => (
                                        <Picker.Item label={value} value={value} key={index} />
                                    ))
                                }
                            </Picker>

                    }
                </View>
            </View>
            : null
            }
        </View>

    );

    // switches
    const [checkService, setCheckService] = useState(
        [
            {name: "Praesent Iaoreet", checked: false},
            {name: "Lorem ipsum", checked: true},
            {name: "Integer posuere nulla enim", checked: false},
            {name: "Mauris sem est", checked: true},
            {name: "Donec cursus", checked: false},
        ]
    );

    const setSwitchValue = (val, ind) => {
        setCheckService((prev) => {
            const newServices = [...prev];
            newServices[ind].checked = val;
            return newServices
        })
    };

    const serviceItem = ({item, index}) => (
        <View style={{flexDirection: "row", borderBottomWidth: 0.5, borderColor: "#fff", paddingVertical: 3.9}}>
            <Switch
                value={item.checked}
                onValueChange={(value) => {
                    setSwitchValue(value, index)
                }}
                color={"#56B7E9"}
            />
            <Text style={{color: "#fff", fontSize: 16}}>{item.name}</Text>
        </View>
    );

    // buttons
    const [isBtnEnabled, setIsBtnEnabled] = useState(
        [
            {iconName: "plane", isEnabled: true},
            {iconName: "ship", isEnabled: true},
            {iconName: "truck", isEnabled: true},
            {iconName: "train", isEnabled: true}
        ]
    );

    const setButtonState = (val, ind) => {
        setIsBtnEnabled((prev) => {
            const newButtons = [...prev];
            newButtons[ind].isEnabled = !newButtons[ind].isEnabled;
            return newButtons
        })
    };

    const transportItem = ({item, index}) => (
        <TouchableOpacity
            style={{
                borderWidth: 1,
                backgroundColor: 'transparent',
                borderColor: item.isEnabled ? "#fff" : "grey"
            }}
            onPress={(item) => setButtonState(item, index)}
        >
            <Icon
                name={item.iconName}
                color={
                    item.isEnabled ? "#fff" : "grey"
                }
                size={20}
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                }}
            />
        </TouchableOpacity>
    );

    return(
        <View style={styles.settingsBarContainer}>
            <View style={{flexDirection: 'row', justifyContent: "flex-end", padding: 10}}>
                <TouchableOpacity onPress={() => {}}>
                    <Icon name={"close"} size={25} color={"#fff"}></Icon>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={[styles.column, {flex: 2}]}>
                    <View style={{width: 250}}>
                        <Text style={{color: "#fff", paddingBottom: 5, fontWeight: "bold"}}>Filter by geography</Text>
                        <Text style={{color: '#fff', fontSize: 12}}>
                            Searching in all regions by default.
                            Select region - and optionally country - to limit
                            search to your selection.
                        </Text>
                    </View>
                </View>
                <View style={[styles.column, {flex: 1}]}>
                    <View style={{width: 250}}>
                        <Text style={{color: "#fff", paddingBottom: 5}}>Filter by model of transport</Text>
                        <View>
                            <FlatList
                                data={isBtnEnabled}
                                renderItem={transportItem}
                                keyExtractor={(item, index) => index.toString() }
                                contentContainerStyle={{flexDirection: "row", justifyContent: "center", paddingBottom: 15}}
                            />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <View style={[styles.column, {flexGrow: 2}]}>
                    <FlatList
                        data={locationsActive}
                        renderItem={locationItem}
                        keyExtractor={(item, index) => index.toString() }
                    />
                </View>
                <View style={[styles.column, {flexGrow: 1}]}>
                    <Text style={{color: "#fff", borderBottomWidth: 0.5, borderColor: "#fff", paddingBottom: 10}}>Filter by Service</Text>
                    <FlatList
                        data={checkService}
                        renderItem={serviceItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    settingsBarContainer: {
        height: 350,
        width: "100%",
        flex: 1,
        zIndex: 222,
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#203E66"
    },
    column: {
        // width: Dimensions.get('window').width/2,
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    },
    picker: {
        height: 20,
        color: "#fff",
        width: "100%"
    },
});