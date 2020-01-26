import React, {useState} from "react";
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from "react-native";

export const Search: React.FC = () => {
    const [search, setSearch] = useState();

    return (
        <SearchBar
            round
            lightTheme
            containerStyle={searchStyles.containerStyle}
            placeholderTextColor={'#000'}
            placeholder="Type Here..."
            onChangeText={() => {
                setSearch({search});
            }}
            value={search}
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