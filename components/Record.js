import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import colors from "../constants/Colors";
// import { RecordsContext } from "../providers/RecordsProvider";

export default function Record({
  editable = false,
  id,
  title,
  type,
  data = [],
  onUpdate,
}) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
      {data.map((item, index) => (
        <Input
          key={index}
          editable={editable}
          index={index}
          value={item}
          onEndEditingHandler={onUpdate}
        />
      ))}
    </View>
  );
}

function Input({ editable, index, value, onEndEditingHandler }) {
  const [text, setText] = useState(value);
  useEffect(() => setText(value), [value]);

  const styles = StyleSheet.create({
    textInput: {
      fontSize: 20,
      color: editable ? "#000" : colors.darkerGrey,
      backgroundColor: editable ? "#FFF" : colors.lightGrey,
      paddingLeft: 5,
      paddingRight: 5,
      borderWidth: 1,
      borderColor: colors.lightGrey,
      marginTop: 5,
      borderRadius: 5,
      height: 45,
    },
  });

  return (
    <TextInput
      autoCapitalize='words'
      autoCompleteType='off'
      autoCorrect={false}
      editable={editable}
      enablesReturnKeyAutomatically={true}
      keyboardType='default'
      placeholder={(index + 1).toString()}
      returnKeyType='done'
      style={styles.textInput}
      value={text}
      onChangeText={(text) => setText(text)}
      onEndEditing={() => onEndEditingHandler(text, index)}
    />
  );
}

const styles = StyleSheet.create({
  view: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
