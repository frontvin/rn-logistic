import React from "react";
import {View, Text, Image, StyleSheet, Platform} from "react-native";

export const TextPage: React.FC = () => {
  return (
      <View style={textPageStyles.container}>
          <Text style={textPageStyles.testText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text></Text>

      </View>
  )
};

const textPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#072955',
    },
    testText: {
        fontSize: 16,
        color: "#fff",
    }
});