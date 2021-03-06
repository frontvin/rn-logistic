import React, {useState} from "react";
import {ScrollView, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import { Icon } from "react-native-elements";
import SearchInput, { createFilter } from 'react-native-search-filter';

export const Search: React.FC<any> = ({ toggleSettings }) => {
    const [search, setSearch] = useState("");
    const items = [
        { id: 1, name: 'Munich, Head Office', addr: "" },
        { id: 2, name: 'Munich, Overland Hub', addr: "" },
        { id: 3, name: 'Munich, Airfreight Center (MUC)', addr: "" },
        { id: 4, name: 'Munster, Overland Station', addr: "" },
    ];

    const [isVisibleSearch, setVisibleSearch] = useState(true)

    const [selectedItems, setSelectedItems] = useState('');

    const searchUpdated = (term) => {
        setSelectedItems( term )
    };

    const KEYS_TO_FILTERS = ['name'];
    const filteredAddressees = items.filter(createFilter(selectedItems, KEYS_TO_FILTERS));

    return (
        <View
            style={{
                flexDirection: "row",
                flex: 1,
                borderBottomColor: "#fff",
                borderBottomWidth: 1
            }}
        >
            <View
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#203E66",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Icon name={'search'} size={35} color={"#fff"} />
            </View>

            <View style={styles.container}>
                <SearchInput
                    onChangeText={(term) => { searchUpdated(term) }}
                    style={styles.searchInput}
                    placeholder="Find KN Facility (office, station, warehouse, etc.)"
                    placeholderTextColor={"#6F839C"}
                    onFocus={() => setVisibleSearch(!isVisibleSearch)}
                    onEndEditing={() => setVisibleSearch(!isVisibleSearch)}
                />
                <ScrollView
                    style={{
                        display: isVisibleSearch ? "none" : "flex",
                        backgroundColor: '#385377'
                    }}
                >
                    {filteredAddressees.map(address => {
                        return (
                            <TouchableOpacity onPress={()=>alert(address.name)} key={address.id} style={styles.emailItem}>
                                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                    <Text style={{color: "#fff", paddingVertical: 5}}>{address.name}</Text>
                                    <Text style={styles.emailSubject}>{address.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>

            <TouchableOpacity onPress={toggleSettings}>
                <View
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "#203E66",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Icon name={'settings'} size={35} color={"#fff"}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setSearch('') }} >
                <View
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "#203E66",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#203E66',
        justifyContent: 'flex-start',
    },
    emailItem:{
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10,
        color: '#fff'
    },
    emailSubject: {
        color: '#6F839C'
    },
    searchInput:{
        padding: 16.5,
        backgroundColor: "#203E66",
        color: "#fff"
    }
});