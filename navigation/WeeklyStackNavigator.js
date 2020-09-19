import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Weekly from "../screens/Weekly";
import WeeklyDetails from "../screens/WeeklyDetails";

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Weekly' component={Weekly} />
      <Stack.Screen
        name='WeeklyDetails'
        options={({ route }) => ({
          title: route.params.name,
        })}
        component={WeeklyDetails}
      />
    </Stack.Navigator>
  );
}
