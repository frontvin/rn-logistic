import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Switch} from "react-native-paper";


export const TopSettingsBar2: React.FC<any> = () => {

    const transport = [
        {iconName: "plane", isEnabled: true},
        {iconName: "ship", isEnabled: true},
        {iconName: "truck", isEnabled: true},
        {iconName: "train", isEnabled: true}
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

    return (
        <View style={styles.settingsBarContainer}>
            <View style={{flexDirection: 'row', justifyContent: "flex-end", padding: 10}}>
                <TouchableOpacity onPress={() => {}}>
                    <Icon name={"close"} size={25} color={"#fff"}></Icon>
                </TouchableOpacity>
            </View>

            <View style={{ paddingBottom: 10}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", paddingBottom: 10}}>
                    <Text style={{color: "#fff", fontSize: 18,  width:  Dimensions.get('window').width/3,}}>Filter by Geography</Text>
                    <Text style={{color: "#fff", fontSize: 18,  width:  Dimensions.get('window').width/3,}}>Filter by Mode of Transport</Text>
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-between", }}>
                    <View style={{width:  Dimensions.get('window').width/3,}}>
                        <Text style={{color: '#fff', fontSize: 16}}>
                            Searching in all regions by default.
                            Select region - and optionally country - to limit
                            search to your selection.
                        </Text>
                    </View>
                    <View style={{alignItems: 'flex-start', width:  Dimensions.get('window').width/3,}}>
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
                <View style={{borderWidth: 1, borderColor: "#000"}}>

                </View>
                <View style={{borderWidth: 1, borderColor: "#000"}}>
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
        flexDirection: "column",
        paddingHorizontal: 15,
        backgroundColor: "#203E66",
        height: 350,
        width: "100%",
        flex: 1,
        zIndex: 222,
        position: "absolute",
        top: 0,
        left: 0,
    },

});