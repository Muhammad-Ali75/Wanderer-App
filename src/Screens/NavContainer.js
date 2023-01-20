import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StartScreenStack } from "./Start Screens/StartScreenStack";
import { DrawerScreenStack } from "./Main Flow/DrawerScreenStack";

import { Context as AuthContext } from "../Context/AuthContext";

export const NavContainer = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);
  return (
    <NavigationContainer>
      {state.token == null ? <StartScreenStack /> : <DrawerScreenStack />}
    </NavigationContainer>
  );
};
