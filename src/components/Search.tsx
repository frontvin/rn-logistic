import React, {useState} from "react";
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from "react-native";

export const Search: React.FC = () => {
    const [search, setSearch] = useState();

    return (
        // <View style={searchStyles.searchSection}>
        //     <Icon style={searchStyles.searchIcon} name="search" size={20} color={"#fff"} />
        //     <TextInput
        //         placeholder={"Enter here what you want to find ..."}
        //         placeholderTextColor={"#007ec1"}
        //         style={searchStyles.search}
        //     />
        // </View>
        <SearchBar
            inputStyle={searchStyles.inputStyle}
            containerStyle={searchStyles.containerStyle}
            placeholderTextColor={'#g5g5g5'}
            placeholder="Type Here..."
            onChangeText={() => {
                setSearch({search});
            }}
            value={search}

        />
    )
};

// const searchStyles = StyleSheet.create({
//     searchSection: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingLeft: 20
//     },
//     searchIcon: {
//         padding: 10,
//     },
//     search: {
//         backgroundColor: "#072955",
//         color: "#fff",
//         width: "100%",
//         borderBottomWidth: 1,
//         borderBottomColor: "#fff",
//     }
// });
// import React from "react";
// import { SearchBar } from 'react-native-elements';
// import {StyleSheet} from "react-native";
//
// export class Search extends React.Component {
//     state = {
//         search: '',
//     };
//
//     updateSearch = search => {
//         this.setState({ search });
//     };
//
//     render() {
//         const { search } = this.state;
//
//         return (
//             <SearchBar
//                 inputStyle={searchStyles.inputStyle}
//                 containerStyle={searchStyles.containerStyle}
//                 placeholderTextColor={'#g5g5g5'}
//                 placeholder="Type Here..."
//                 onChangeText={this.updateSearch}
//                 value={search}
//             />
//         );
//     }
// }
//
const searchStyles = StyleSheet.create({
   inputStyle: {
       backgroundColor: 'white'
   },
   containerStyle: {
       width: "100%",
       backgroundColor: 'white',
       borderWidth: 0,
       borderRadius: 5
   },
});