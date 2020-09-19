import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../constants/Colors";

export default function SectionHeader({ children }) {
  const styles = StyleSheet.create({
    view: {
      backgroundColor: colors.lightGrey,
      paddingLeft: 10
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.darkGrey
    }
  });

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}
