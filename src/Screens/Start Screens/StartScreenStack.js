import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "./SignIn";
import SignUpScreen from "./SignUp";
import StartScreen from "./StartScreen";

const StartScreens = createStackNavigator();

export const StartScreenStack = () => {
  return (
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
};
