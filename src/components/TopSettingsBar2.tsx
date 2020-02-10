import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList, Platform, Picker} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Switch} from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";


export const TopSettingsBar2: React.FC<any> = () => {

    const transport = [
        {iconName: "plane", isEnabled: true, style: {borderWidth: 1, borderTopLeftRadius: 5, borderBottomLeftRadius: 5}},
        {iconName: "ship", isEnabled: true, style: {borderLeftWidth: 0.5, borderRightWidth: 0.5, borderTopWidth: 1, borderBottomWidth: 1}},
        {iconName: "truck", isEnabled: true, style: {borderLeftWidth: 0.5, borderRightWidth: 0.5, borderTopWidth: 1, borderBottomWidth: 1}},
        {iconName: "train", isEnabled: true, style: {borderTopRightRadius: 5, borderBottomRightRadius: 5, borderWidth: 1}}
    ];

    const [isBtnEnabled, setIsBtnEnabled] = useState(transport);

    const setButtonState = (val, ind) => {
        setIsBtnEnabled((prev) => {
            const newButtons = [...prev];
            newButtons[ind].isEnabled = !newButtons[ind].isEnabled;
            return newButtons
        })
    };

    const transportItem = ({item, index}) => (
        <TouchableOpacity
            style={[
                item.style,
                {
                    backgroundColor: 'transparent',
                    borderColor: item.isEnabled ? "#fff" : "grey",
                }
            ]}
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
        <View
            style={{
                flexDirection: "row",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 35,
                alignItems: "center",
                borderBottomWidth: 0.5,
                borderColor: "#fff",
                paddingVertical: 3.9
            }}
        >
            <Switch
                value={item.checked}
                onValueChange={(value) => {
                    setSwitchValue(value, index)
                }}
                color={"#56B7E9"}
                style={{
                    transform: Platform.OS === 'ios' ? [{ scaleX: .7 }, { scaleY: .7 }] : [{ scaleX: 0.9 }, { scaleY: 0.9 }],
                    paddingVertical: Platform.OS === 'ios' ? 5 : 0,
                    borderWidth: 1,
                    borderRadius: 15,
                    borderColor: "#fff"
                }}
            />
            <Text style={{color: "#fff", fontSize: 16, paddingLeft: 10}}>{item.name}</Text>
        </View>
    );

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

    const countries = [
        [
            { label: 'Iran', value: 'Iran', key: 1 },
            { label: 'Turkey', value: 'Turkey', key: 2 },
            { label: 'Egypt', value: 'Egypt', key: 3 },
            { label: 'Israel', value: 'Israel', key: 4 },
        ],
        [
            { label: '1', value: 'Iran', key: 1 },
            { label: '2', value: 'Turkey', key: 2 },
            { label: '3', value: 'Egypt', key: 3 },
            { label: '4', value: 'Israel', key: 4 },
        ],
        [
            { label: '5', value: 'Iran', key: 1 },
            { label: '6', value: 'Turkey', key: 2 },
            { label: '7', value: 'Egypt', key: 3 },
            { label: '8', value: 'Israel', key: 4 },
        ],
        [
            { label: 'Iran', value: 'Iran', key: 1 },
            { label: 'Turkey', value: 'Turkey', key: 2 },
            { label: 'Egypt', value: 'Egypt', key: 3 },
            { label: 'Israel', value: 'Israel', key: 4 },
        ],
        [
            { label: 'Iran', value: 'Iran', key: 1 },
            { label: 'Turkey', value: 'Turkey', key: 2 },
            { label: 'Egypt', value: 'Egypt', key: 3 },
            { label: 'Israel', value: 'Israel', key: 4 },
        ],
        [
            { label: 'Iran', value: 'Iran', key: 1 },
            { label: 'Turkey', value: 'Turkey', key: 2 },
            { label: 'Egypt', value: 'Egypt', key: 3 },
            { label: 'Israel', value: 'Israel', key: 4 },
        ]
    ];

    const locationItem = ({item, index}) => (
        <View style={{flexDirection: "row",width: item.toggleIn ? Dimensions.get('window').width*0.6 : Dimensions.get('window').width*0.3}}>
            <View
                style={{
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 35,
                    borderBottomWidth: 0.5,
                    borderColor: "#fff",
                    paddingVertical: 9.3,
                    paddingHorizontal: 10,
                    width: item.toggleIn ? Dimensions.get('window').width*0.1 : Dimensions.get('window').width*0.3
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",

                    }}
                    onPress={(item) => {
                        setActiveLocationState(item, index);
                    }}
                >
                    {
                        item.toggleIn ?
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <Icon name={"check"} color={"#56B7E9"} size={15}></Icon>
                                <Text style={{color: "#fff", fontSize: 16, paddingLeft: 15}}>{item.name}</Text>
                            </View>

                            : <View
                                style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", flex: 1}}>
                                <Text style={{color: "#fff", fontSize: 16}}>{item.name}</Text>
                                <Icon name={"chevron-right"} color={"#56B7E9"} size={15}></Icon>
                            </View>

                    }
                </TouchableOpacity>
            </View>
            {
                item.toggleIn ?
                    <View style={{
                        flexGrow: 1,
                        flexShrink: 1,
                        flexBasis: 35,
                        borderBottomWidth: 0.5,
                        borderColor: "#fff",
                        paddingVertical: 10.5,
                        width: item.toggleIn ? Dimensions.get('window').width*0.3 : Dimensions.get('window').width*0.3
                    }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                paddingHorizontal: 15,
                            }}
                        >
                            {
                                Platform.OS === 'ios' ?
                                    <RNPickerSelect
                                        placeholder={{
                                            label: "Choose Country (optional)",
                                            value: null,
                                        }}
                                        textInputProps={{
                                            color: "#fff"
                                        }}
                                        onValueChange={(itemValue, itemIndex)  =>
                                            setLanguage(itemValue)}
                                        items={countries[index]}
                                        style={{
                                            paddingLeft: 15,
                                            iconContainer: {
                                                top: 0,
                                                right: -20
                                            },
                                        }}
                                        Icon={() => {
                                            return <Icon name="chevron-down" size={14} color="#fff" />;
                                        }}
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
                        </TouchableOpacity>
                    </View>
                    : null
            }
        </View>

    );

    const [language, setLanguage] = useState(0);

    return (
        <View style={styles.settingsBarContainer}>
            <View style={{flexDirection: 'row', justifyContent: "flex-end", padding: 10}}>
                <TouchableOpacity onPress={() => {}}>
                    <Icon name={"close"} size={25} color={"#fff"}></Icon>
                </TouchableOpacity>
            </View>

            <View style={{ paddingBottom: 10}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", paddingBottom: 10}}>
                    <Text style={{color: "#fff", fontSize: 18,  width:  Dimensions.get('window').width*0.3}}>Filter by Geography</Text>
                    <Text style={{color: "#fff", fontSize: 18,  width:  Dimensions.get('window').width*0.3}}>Filter by Mode of Transport</Text>
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-between", }}>
                    <View style={{width:  Dimensions.get('window').width*0.3}}>
                        <Text style={{color: '#fff', fontSize: 16}}>
                            Searching in all regions by default.
                            Select region - and optionally country - to limit
                            search to your selection.
                        </Text>
                    </View>

                    <View style={{alignItems: 'flex-start', width:  Dimensions.get('window').width*0.3}}>
                        <FlatList
                            data={isBtnEnabled}
                            renderItem={transportItem}
                            keyExtractor={(item, index) => index.toString() }
                            contentContainerStyle={{flexDirection: "row", justifyContent: "center", paddingBottom: 15}}
                        />
                    </View>
                </View>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", }}>
                <FlatList
                    data={locationsActive}
                    renderItem={locationItem}
                    keyExtractor={(item, index) => index.toString() }
                />

                <View style={{width: Dimensions.get('window').width*0.3}}>
                    <View
                        style={{
                            justifyContent: "center",
                            flexGrow: 1,
                            flexShrink: 1,
                            flexBasis: 35,
                            borderBottomWidth: 0.5,
                            borderColor: "#fff",

                        }}
                    >
                        <Text style={{color: "#fff", borderBottomWidth: 0.5, borderColor: "#fff", paddingBottom: 10}}>Filter by Service</Text>
                    </View>
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
        flexDirection: "column",
        paddingHorizontal: 15,
        backgroundColor: "#203E66",
        height: 400,
        width: "100%",
        flex: 1,
        zIndex: 222,
        position: "absolute",
        top: 0,
        left: 0,
    },
    picker: {
        height: 20,
        color: "#fff",
        width: "100%"
    },
});