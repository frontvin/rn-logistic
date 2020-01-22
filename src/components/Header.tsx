import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {Search} from "./Search";
import Icon from "react-native-vector-icons/FontAwesome";

export const Header: React.FC = () => {
    return (
        <View style={styles.container}>
            <Button title="Menu" onPress={()=>{}}/>
            <Search />
        </View>
    )
};

const styles = StyleSheet.create({
   container: {
       flexDirection: "row",
       height: 50,
       justifyContent: "flex-start",
       alignItems: "center",
       backgroundColor: "#072955",
   },
   headerName: {
       fontSize: 20,
   }
});