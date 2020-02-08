import React, {useState} from "react";
import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";

export const Search: React.FC<any> = ({ toggleSettings}) => {
    const [search, setSearch] = useState("");

    return (

        <View style={{flexDirection: "row", flex: 1, borderBottomColor: "#fff", borderBottomWidth: 1}}>
            <View style={{width: 50, height: 50, backgroundColor: "#203E66", justifyContent: "center", alignItems: "center"}}>
                <Icon name={'search'} size={35} color={'#fff'}></Icon>
            </View>

            <TextInput
                placeholder="Find KN Facility (office, station, warehouse, etc.)"
                onChangeText={() => {
                    // @ts-ignore
                    setSearch({search});
                }}
                value={search}
                style={{flex: 1, backgroundColor: "#203E66", width: "100%", color: "#fff", fontSize: 20}}
                placeholderTextColor="#586F8C"
            />
            <TouchableOpacity onPress={toggleSettings}>
                <View style={{width: 50, height: 50, backgroundColor: "#203E66", justifyContent: "center", alignItems: "center"}}>
                    <Icon
                        name={'settings'}
                        size={35}
                        color={'#fff'}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { setSearch('') }}
            >
                <View style={{width: 50, height: 50, backgroundColor: "#203E66", justifyContent: "center", alignItems: "center"}}>
                    <Icon
                        name={'close'}
                        size={35}
                        color={
                            search === '' ? "grey" : "#fff"
                        }
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
};

const searchStyles = StyleSheet.create({
   containerStyle: {
       width: "100%",
       backgroundColor: 'transparent',
       padding: 10
   },
});