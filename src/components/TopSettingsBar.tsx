import React, {useState} from 'react'
import {View, Text, Dimensions, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import {Button} from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import {Switch} from "react-native-paper";

export const TopSettingsBar: React.FC<any> = () => {

    // locations
    const location = [
        {name: "Africa"},
        {name: "Asia Pacific"},
        {name: "Europe"},
        {name: "Middle East"},
        {name: "North America"},
        {name: "South and Central America"},
    ];

    const locationItem = ({item}) => (
        <View style={{borderBottomWidth: 0.5, borderColor: "#fff"}}>
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 5,
                    paddingBottom: 5,
                }}
            >
                <Text style={{color: "#fff", fontSize: 16}}>{item.name}</Text>
                <Icon name={"chevron-right"} color={"#56B7E9"} size={15}></Icon>
            </TouchableOpacity>
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
        <View style={{flexDirection: "row", borderBottomWidth: 0.5, borderColor: "#fff", paddingVertical: 5}}>
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
            {iconName: "plane", isEnabled: true, color: "#fff"},
            {iconName: "ship", isEnabled: true, color: "#fff"},
            {iconName: "truck", isEnabled: true, color: "#fff"},
            {iconName: "train", isEnabled: true, color: "#fff"}
        ]
    );

    const setButtonState = (val, ind) => {
        setIsBtnEnabled((prev) => {
            const newButtons = [...prev];
            newButtons[ind].isEnabled = val;
            return newButtons
        })
    };

    const transportItem = ({item, index}) => (
        <Button
            icon={
                <Icon
                    name={item.iconName}
                    color={
                        item.color
                    }
                    size={20}
                    style={{paddingHorizontal: 13}}
                />
            }
            buttonStyle={{
                borderWidth: 1,
                borderTopRightRadius: 0,
                borderBottomRightRadius:0,
                backgroundColor: 'transparent',
                borderColor: item.color
            }}
            onPress={() => setButtonState}
        />
    );

    return(
        <View style={styles.settingsBarContainer}>
            <TouchableOpacity onPress={() => {}}>
                <View style={{flexDirection: 'row', justifyContent: "flex-end", padding: 10}}>
                    <Icon name={"close"} size={25} color={"#fff"}></Icon>
                </View>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <View style={styles.column}>
                    <Text style={{color: "#fff", paddingBottom: 5, fontWeight: "bold"}}>Filter by geography</Text>
                    <Text style={{color: '#fff', fontSize: 12, borderBottomWidth: 0.5, borderColor: "#fff", paddingBottom: 5}}>
                        Searching in all regions by default.
                        Select region - and optionally country - to limit
                        search to your selection.
                    </Text>

                    <FlatList
                        data={location}
                        renderItem={locationItem}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </View>

                <View style={styles.column}>

                </View>

                <View style={styles.column}>
                    <View>
                        <Text style={{color: "#fff", paddingBottom: 5}}>Filter by model of transport</Text>
                        <View>
                            <FlatList
                                data={isBtnEnabled}
                                renderItem={transportItem}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={{flexDirection: "row", justifyContent: "center", paddingBottom: 15}}
                            />
                            {/*<Button*/}
                            {/*    icon={*/}
                            {/*        <Icon*/}
                            {/*            name={"plane"}*/}
                            {/*            color={*/}
                            {/*                isBtnEnabled ? "grey" : "#fff"*/}
                            {/*            }*/}
                            {/*            size={20}*/}
                            {/*            style={{paddingHorizontal: 13}}*/}
                            {/*        />*/}
                            {/*    }*/}
                            {/*    buttonStyle={{*/}
                            {/*        borderWidth: 1,*/}
                            {/*        borderTopRightRadius: 0,*/}
                            {/*        borderBottomRightRadius:0,*/}
                            {/*        backgroundColor: 'transparent',*/}
                            {/*        borderColor: isBtnEnabled ? "grey" : "#fff"*/}
                            {/*    }}*/}
                            {/*    onPress={() => setIsDtnEnabled(!isBtnEnabled)}*/}
                            {/*/>*/}
                            {/*<Button*/}
                            {/*    icon={*/}
                            {/*        <Icon*/}
                            {/*            name={"ship"}*/}
                            {/*            color={*/}
                            {/*                isBtnEnabled ? "grey" : "#fff"*/}
                            {/*            }*/}
                            {/*            size={20}*/}
                            {/*            style={{paddingHorizontal: 13}}*/}
                            {/*        />*/}
                            {/*    }*/}
                            {/*    buttonStyle={{*/}
                            {/*        borderWidth: 1,*/}
                            {/*        borderRadius: 0,*/}
                            {/*        backgroundColor: 'transparent',*/}
                            {/*        borderColor: isBtnEnabled ? "grey" : "#fff"*/}
                            {/*    }}*/}
                            {/*    onPress={() => setIsDtnEnabled(!isBtnEnabled)}*/}
                            {/*/>*/}
                            {/*<Button*/}
                            {/*    icon={*/}
                            {/*        <Icon*/}
                            {/*            name={"truck"}*/}
                            {/*            color={*/}
                            {/*                isBtnEnabled ? "grey" : "#fff"*/}
                            {/*            }*/}
                            {/*            size={20}*/}
                            {/*            style={{paddingHorizontal: 13}}*/}
                            {/*        />*/}
                            {/*    }*/}
                            {/*    buttonStyle={{*/}
                            {/*        borderWidth: 1,*/}
                            {/*        borderRadius: 0,*/}
                            {/*        backgroundColor: 'transparent',*/}
                            {/*        borderColor: isBtnEnabled ? "grey" : "#fff"*/}
                            {/*    }}*/}
                            {/*    onPress={() => setIsDtnEnabled(!isBtnEnabled)}*/}
                            {/*/>*/}
                            {/*<Button*/}
                            {/*    icon={*/}
                            {/*        <Icon*/}
                            {/*            name={"train"}*/}
                            {/*            color={*/}
                            {/*                isBtnEnabled ? "grey" : "#fff"*/}
                            {/*            }*/}
                            {/*            size={20}*/}
                            {/*            style={{paddingHorizontal: 13}}*/}
                            {/*        />*/}
                            {/*    }*/}
                            {/*    buttonStyle={{*/}
                            {/*        borderWidth: 1,*/}
                            {/*        borderTopLeftRadius: 0,*/}
                            {/*        borderBottomLeftRadius:0,*/}
                            {/*        backgroundColor: 'transparent',*/}
                            {/*        borderColor: isBtnEnabled ? "grey" : "#fff"*/}
                            {/*    }}*/}
                            {/*    onPress={() => setIsDtnEnabled(!isBtnEnabled)}*/}
                            {/*/>*/}
                        </View>
                    </View>
                    <View>
                        <Text style={{color: "#fff", borderBottomWidth: 0.5, borderColor: "#fff", paddingBottom: 5}}>Filter by Service</Text>
                        <FlatList
                            data={checkService}
                            renderItem={serviceItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
   settingsBarContainer: {
       height: 350,
       width: Dimensions.get('window').width,
       zIndex: 222,
       position: "absolute",
       top: 0,
       left: 0,
       backgroundColor: "#072955"
   },
   column: {
       width: Dimensions.get('window').width/3,
       paddingLeft: 15,
       paddingRight: 15
   }
});