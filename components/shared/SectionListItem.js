import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export default function Item({ name }) {
  const styles = StyleSheet.create({
    view: {
      height: 55,
      backgroundColor: "#FFF",
      paddingHorizontal: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    text: {
      flexGrow: 1,
      fontSize: 20
    }
  });

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{name}</Text>
      <Ionicons size={16} color={Colors.darkGrey} name='ios-arrow-forward' />
    </View>
  );
}
