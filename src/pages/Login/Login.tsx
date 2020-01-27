import React from "react";
import {StyleSheet, Text, View, TextInput, Button, SafeAreaView} from 'react-native';

export class Login extends React.Component<any> {
    render(){
        return (
                <SafeAreaView style={loginStyles.container}>
                    <Text style={loginStyles.companyName}>Company name</Text>
                    <TextInput
                        style={loginStyles.textInput}
                        placeholder={"Username"}
                        placeholderTextColor={"#fff"}
                    />
                    <TextInput
                        style={loginStyles.textInput}
                        placeholder={"Password"}
                        placeholderTextColor={"#fff"}
                        secureTextEntry={true}
                    />
                    <View style={loginStyles.btnContainer}>
                        <Button
                            title={"Login"}
                            onPress={() => this.props.navigation.navigate("Page1")}
                        />
                    </View>
                </SafeAreaView>
        )
    }
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#072955',
    },
    companyName: {
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        paddingBottom: 25
    },
    textInput: {
        height: 40,
        width: "60%",
        color: "#fff",
        borderBottomWidth: 2,
        borderBottomColor: "#fff",
        paddingBottom: 5,
    },
    btnContainer: {
        width: 100,
        paddingTop: 15,
    },
});