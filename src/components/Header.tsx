import React, {useState} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {Search} from "./Search";
import Icon from "react-native-vector-icons/FontAwesome";

export const Header: React.FC<any> = ({navigation}) => {

    const [isNewSearch, setIsNewSearch] = useState(false);

    return (
        <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <TouchableOpacity onPress={ () => navigation.openDrawer() }>
                <View style={{width: 50, height: 50, backgroundColor: "#56B7E9", justifyContent: "center", alignItems: "center"}}>
                    <Icon name={'bars'} size={35} color={'#fff'}></Icon>
                </View>
            </TouchableOpacity>

            <Search />

            <TouchableOpacity onPress={ () => setIsNewSearch(!isNewSearch) }>
                <View style={{width: 50, height: 50, backgroundColor: "#56B7E9", justifyContent: "center", alignItems: "center"}}>
                    {
                        isNewSearch
                            ? <Icon name={"minus"} size={35} color={'#fff'}></Icon>
                            : <Icon name={"plus"} size={35} color={'#fff'}></Icon>
                    }

                </View>
            </TouchableOpacity>

            {
                isNewSearch
                    ? <Search />
                    : null}
        </View>
    )
};

const styles = StyleSheet.create({
   // container: {
   //     flexDirection: "row",
   //     justifyContent: "center",
   //     alignItems: "center",
   //     height: 50,
   //     width: 50,
   //     backgroundColor: "#56B7E9"
   // },
   // headerName: {
   //     fontSize: 20,
   // }
});