import React, { useContext } from "react";
import {
  Alert,
  SectionList,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import defaultScreenStyles from "../styles/DefaultScreenStyles";
import uuid from "../utils/uuid";
import Form from "../components/Form";
import colors from "../constants/Colors";
import formatForSectionList, {
  compareByTitleASC,
} from "../utils/formatForSectionList";
import SectionHeader from "../components/shared/SectionListHeader";
import Item from "../components/shared/SectionListItem";
import Person from "../classes/Person";
import Record from "../classes/Record";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { add, remove } from "../reducers/staffReducer";

import { StoreContext } from "../providers/StoreProvider";
import { create } from "../reducers/recordsReducer";

export default function StaffScreen({ navigation }) {
  const { state, dispatch, loading } = useContext(StoreContext);

  if (loading) return null;

  return (
    <View style={defaultScreenStyles.container}>
      <Form
        onSubmitHandler={(name) => {
          const id = uuid();
          dispatch(add(new Person(id, name)));
          dispatch(create(new Record(id)));
        }}
      />

      {Object.keys(state.staff).length === 0 && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "85%",
          }}
        >
          <Text style={{ color: colors.mediumGrey, fontSize: 32 }}>
            No Staff
          </Text>
        </View>
      )}

      <SectionList
        sections={formatForSectionList(state.staff).sort(compareByTitleASC)}
        renderItem={({ item }) => (
          <Swipeable
            friction={2}
            renderRightActions={() => (
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  width: 90,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.red,
                }}
                onPress={() => alert(() => dispatch(remove(item.id)))}
              >
                <Text style={{ color: "#FFF", fontSize: 18 }}>Delete</Text>
              </TouchableOpacity>
            )}
          >
            <View>
              <Item key={item.id} name={item.name} />
            </View>
          </Swipeable>
        )}
        renderSectionHeader={({ section }) => (
          <SectionHeader>{section.title}</SectionHeader>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

function alert(callback = () => {}) {
  Alert.alert("Are you sure?", null, [
    { text: "Cancel", style: "cancel" },
    {
      text: "OK",
      onPress: callback,
    },
  ]);
}

StaffScreen.navigationOptions = {
  header: null,
};
