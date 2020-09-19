import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

export default function Button({ color = "blue", onPress, children }) {
  const colorsMap = { red: Colors.red, green: Colors.green, blue: Colors.blue };
  const styles = StyleSheet.create({
    touchableOpacity: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 45,
      backgroundColor: colorsMap[color],
      borderRadius: 5
    },
    text: {
      fontSize: 20,
      color: "#FFF"
    }
  });

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
