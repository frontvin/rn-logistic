import React, {useState} from "react";
// import { SearchBar } from 'react-native-elements';
import { StyleSheet } from "react-native";
import { Searchbar } from 'react-native-paper';

export const Search: React.FC = () => {
    const [search, setSearch] = useState();

    return (
        // <SearchBar
        //     round
        //     lightTheme
        //     showCancel={true}
        //     containerStyle={searchStyles.containerStyle}
        //     placeholderTextColor={'#000'}
        //     placeholder="Find KN Facility (office, station, warehouse, etc.)"
        //     onChangeText={() => {
        //         setSearch({search});
        //     }}
        //     value={search}
        // />
        <Searchbar
            placeholder="Find KN Facility (office, station, warehouse, etc.)"
            onChangeText={() => {
                setSearch({search});
            }}
            value={search}
            style={{flex: 1}}
            placeholderTextColor="#586F8C"
        />
    )
};

const searchStyles = StyleSheet.create({
   containerStyle: {
       width: "100%",
       backgroundColor: 'transparent',
       padding: 10
   },
});