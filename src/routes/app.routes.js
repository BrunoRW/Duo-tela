import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TelaA } from "../pages/TelaA";
import { TelaB } from "../pages/TelaB";
import { TelaC } from "../pages/TelaC";
import { TelaD } from "../pages/TelaD";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Create a custom component that renders a tab navigator inside a drawer navigator
function TabDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TelaA" component={TelaA} />
      <Drawer.Screen name="TelaB" component={TelaB} />
      <Drawer.Screen name="TelaC" component={TelaC} />
      <Drawer.Screen name="TelaD" component={TelaD} />
    </Drawer.Navigator>
  );
}

export default function Routes() {
  return (
    // Wrap the custom component in a navigation container
      // Render the tab navigator with the custom component as one of the screens
      <Tab.Navigator>
        <Tab.Screen name="TabDrawer" component={TabDrawer} />
        <Tab.Screen name="TelaA" component={TelaA} />
        <Tab.Screen name="TelaB" component={TelaB} />
        <Tab.Screen name="TelaC" component={TelaC} />
        <Tab.Screen name="TelaD" component={TelaD} />
      </Tab.Navigator>
  );
}