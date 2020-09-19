import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";

import WeeklyStackNavigator from "./WeeklyStackNavigator";
import MonthlyStackNavigator from "./MonthlyStackNavigator";
import StaffStackNavigator from "./StaffStackNavigator";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName='Staff'>
      <BottomTab.Screen
        name='Weekly'
        component={WeeklyStackNavigator}
        options={{
          title: "Weekly",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-beer' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Monthly'
        component={MonthlyStackNavigator}
        options={{
          title: "Monthly",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-calendar' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Staff'
        component={StaffStackNavigator}
        options={{
          title: "Staff",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-person-add' />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
