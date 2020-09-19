import React, { useContext } from "react";
import { View, Text } from "react-native";
import Record from "../components/Record";
import { update } from "../reducers/recordsReducer";
import { StoreContext } from "../providers/StoreProvider";

export default function WeeklyDetails({ route, navigation }) {
  const { state, dispatch } = useContext(StoreContext);
  const { id, name } = route.params;

  return (
    <View>
      <Record
        editable
        title={"Weekly Drinks"}
        data={state.records[id] ? state.records[id].weekly : Array(5).fill("")}
        onUpdate={(text, index) => {
          dispatch(update(id, "weekly", index, text));
        }}
      />
    </View>
  );
}
