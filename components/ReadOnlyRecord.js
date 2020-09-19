import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import colors from "../constants/Colors";

export default function ReadOnlyRecord({
  title,
  inputs = [],
  record: localRecord
}) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>

      {inputs.map((number, index) => (
        <Input key={index} value={localRecord[index]} placeholder={number} />
      ))}
    </View>
  );
}

function Input({ value, placeholder }) {
  const styles = StyleSheet.create({
    textInput: {
      fontSize: 20,
      backgroundColor: "#FFF",
      paddingLeft: 5,
      paddingRight: 5,
      borderWidth: 1,
      borderColor: colors.lightGrey,
      marginTop: 5,
      borderRadius: 5,
      height: 45
    }
  });

  return (
    <TextInput
      style={styles.textInput}
      editable={false}
      placeholder={placeholder.toString()}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.lighterGrey,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 0
  }
});
