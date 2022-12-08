import React from "react";

import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

import SignInScreen from "./SignIn";
import SignUpScreen from "./SignUp";
import StartScreen from "./StartScreen";
import { createStackNavigator } from "@react-navigation/stack";

const GetInStack = createStackNavigator();

const GetInScreens = ({ navigation }) => (
  <GetInStack.Navigator>
    <GetInStack.Screen
      name="StartScreen"
      component={StartScreen}
      options={{ headerShown: false }}
    />
    <GetInStack.Screen
      name="SignInScreen"
      component={SignInScreen}
      options={{ headerShown: false }}
    />
    <GetInStack.Screen
      name="SignUpScreen"
      component={SignUpScreen}
      options={{ headerShown: false }}
    />
  </GetInStack.Navigator>
);

export default GetInScreens;
