import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Staff from "../screens/Staff";

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Staff' component={Staff} />
    </Stack.Navigator>
  );
}
