import React from "react";

import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

import SignInScreen from "./SignIn";
import SignUpScreen from "./SignUp";
import StartScreen from "./StartScreen";
import { createStackNavigator } from "@react-navigation/stack";

const StartScreens = createStackNavigator();

const StartScreenStack = ({ navigation }) => (
  <StartScreens.Navigator>
    <StartScreens.Screen
      name="StartScreen"
      component={StartScreen}
      options={{ headerShown: false }}
    />
    <StartScreens.Screen
      name="SignInScreen"
      component={SignInScreen}
      options={{ headerShown: false }}
    />
    <StartScreens.Screen
      name="SignUpScreen"
      component={SignUpScreen}
      options={{ headerShown: false }}
    />
  </StartScreens.Navigator>
);

export default StartScreenStack;
