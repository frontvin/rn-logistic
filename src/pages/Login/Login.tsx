import React from "react";
import {StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
import { Button } from "react-native-elements";

export const Login: React.FC<any> = ({navigation}) => {
        return (
                <SafeAreaView style={loginStyles.container}>
                    <View style={{paddingTop: "10%"}}>
                        <Text style={loginStyles.companyName}>KN <Text style={{color: "#56B7E9"}}>Sales</Text>Companion</Text>
                        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "flex-end"}}>
                            <TextInput
                                style={loginStyles.textInput}
                                placeholder={"Username"}
                                placeholderTextColor={"#7E8FA6"}
                            />
                            <TextInput
                                style={loginStyles.textInput}
                                placeholder={"Password"}
                                placeholderTextColor={"#7E8FA6"}
                                secureTextEntry={true}
                            />
                            <View style={loginStyles.btnContainer}>
                                <Button
                                    title={"Login"}
                                    onPress={() => navigation.navigate("Page1")}
                                />
                            </View>
                        </View>
                    </View>

                </SafeAreaView>
        )
};

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#072955',
    },
    companyName: {
        color: '#fff',
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 36,
        paddingBottom: 25
    },
    textInput: {
        height: 40,
        width: "30%",
        color: "#fff",
        borderBottomWidth: 2,
        borderBottomColor: "#fff",
        marginRight: 10,
        paddingBottom: 5,
        fontSize: 20
    },
    btnContainer: {
        width: 150,
        paddingTop: 15,
    },
});