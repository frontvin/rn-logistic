import React, {useState} from 'react'
import {View, Text, Dimensions, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import {Divider} from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import {Switch} from "react-native-paper";

export const TopSettingsBar: React.FC<any> = () => {
    const location = [
        {name: "Africa"},
        {name: "Asia Pacific"},
        {name: "Europe"},
        {name: "Middle East"},
        {name: "North America"},
        {name: "South and Central America"},
    ];

    const servicesName = [
        {name: "Praesent Iaoreet"},
        {name: "Lorem ipsum"},
        {name: "Integer posuere nulla enim"},
        {name: "Mauris sem est"},
        {name: "Donec cursus"},
    ];

    const [checkService, setCheckService] = useState(false);

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
                    <Text style={{color: '#fff', fontSize: 12, paddingBottom: 5}}>
                        Searching in all regions by default.
                        Select region - and optionally country - to limit
                        search to your selection.
                    </Text>
                    <Divider></Divider>

                    <FlatList
                        data={location}
                        renderItem={({item}) =>
                            <View style={{borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: "#fff"}}>
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
                        }
                    />

                </View>

                <View style={styles.column}></View>

                <View style={styles.column}>
                    <View>
                        <Text style={{color: "#fff"}}>Filter by model of transport</Text>
                    </View>
                    <View>
                        <Text style={{color: "#fff"}}>Filter by Service</Text>

                        <FlatList
                            data={servicesName}
                            renderItem={({item}) =>
                                <View style={{flexDirection: "row", borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: "#fff"}}>
                                    <Switch
                                        value={checkService}
                                        onValueChange={() => {
                                            setCheckService(!checkService)
                                        }}
                                        color={"#56B7E9"}
                                    />
                                    <Text style={{color: "#fff", fontSize: 16}}>{item.name}</Text>
                                </View>
                            }
                        >

                        </FlatList>
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