import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  SectionList,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import defaultScreenStyles from "../styles/DefaultScreenStyles";
import Button from "../components/shared/Button";
import SectionHeader from "../components/shared/SectionListHeader";
import Item from "../components/shared/SectionListItem";
import colors from "../constants/Colors";
import formatForSectionList, {
  compareByTitleASC,
} from "../utils/formatForSectionList";
import { StoreContext } from "../providers/StoreProvider";
import { reset } from "../reducers/recordsReducer";

export default function WeeklyScreen({ navigation }) {
  const { state, dispatch, loading } = useContext(StoreContext);

  if (loading) return null;

  return (
    <View style={defaultScreenStyles.container}>
      {Object.keys(state.staff).length === 0 && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
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
          <TouchableOpacity
            onPress={() => navigation.push("WeeklyDetails", item)}
          >
            <Item key={item.id} name={item.name} />
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <SectionHeader>{section.title}</SectionHeader>
        )}
        keyExtractor={(item, index) => index}
      />
      <Footer>
        <Button
          color='red'
          onPress={() => {
            alert(() => {
              dispatch(reset("weekly"));
            });
          }}
        >
          Start New Week
        </Button>
      </Footer>
    </View>
  );
}

function Footer({ children }) {
  const styles = StyleSheet.create({
    view: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: colors.lightGrey,
    },
  });
  return <View style={styles.view}>{children}</View>;
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
