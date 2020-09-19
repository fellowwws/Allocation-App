import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Monthly from "../screens/Monthly";
import MonthlyDetails from "../screens/MonthlyDetails";

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Monthly' component={Monthly} />
      <Stack.Screen
        name='MonthlyDetails'
        options={({ route }) => ({
          title: route.params.name,
        })}
        component={MonthlyDetails}
      />
    </Stack.Navigator>
  );
}
