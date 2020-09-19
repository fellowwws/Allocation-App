import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import colors from "../constants/Colors";
// import Button from "../components/shared/Button";
import { isValidString } from "../utils/isValidString";

export default function Form({ onSubmitHandler }) {
  const [showCancel, setShowCancel] = useState(false);

  return (
    <View style={styles.view}>
      <Input
        onSubmitHandler={onSubmitHandler}
        {...{ showCancel, setShowCancel }}
      />
      {showCancel && (
        <Button
          style={styles.button}
          title='Cancel'
          onPress={() => {
            setShowCancel(false);
            Keyboard.dismiss();
          }}
        />
      )}
    </View>
  );
}

function Input({ onSubmitHandler, showCancel, setShowCancel }) {
  const [text, setText] = useState("");
  const [placeholderText, setplaceholderText] = useState("Enter a name");

  const styles = StyleSheet.create({
    textInput: {
      flex: 1,
      height: 40,
      paddingHorizontal: 5,
      backgroundColor: "#FFF",
      borderRadius: 5,
      fontSize: 18,
    },
  });

  const onFocusHandler = () => {
    setShowCancel(true);
    setplaceholderText("John Doe or John");
  };
  const onBlurHandler = () => {
    setShowCancel(false);
    setplaceholderText("Enter a name");
  };

  return (
    <TextInput
      style={[
        styles.textInput,
        showCancel ? { marginLeft: 10 } : { marginHorizontal: 10 },
      ]}
      autoCapitalize='words'
      autoCompleteType='off'
      autoCorrect={false}
      clearButtonMode='while-editing'
      enablesReturnKeyAutomatically={true}
      keyboardType='default'
      placeholder={placeholderText}
      returnKeyType='done'
      value={text}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      onChangeText={(text) => setText(text)}
      onSubmitEditing={({ nativeEvent }) => {
        onSubmitHandler(nativeEvent.text.trim());
        setText("");
      }}
    />
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: colors.lighterGrey,
    borderBottomWidth: 1,
    borderBottomColor: colors.mediumGrey,
  },
});
