import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "./DrawerContent";
import MainTabScreen from "./MainTabScreen";

import DetailsScreenIsl from "../../../DetailScreens/DetailsScreenIsl";
import DetailsScreenLahore from "../../../DetailScreens/DetailsScreenLahore copy 2";
import DetailsScreenMul from "../../../DetailScreens/DetailsScreenMul";
import DetailsScreenKr from "../../../DetailScreens/DetailsScreenkr";
import DetailsScreenMur from "../../../DetailScreens/DetailsScreenMur";

import HomeScreen from "../../../HomeScreen";

import HotelsLahore from "./Hotels";

const Drawer = createDrawerNavigator();

export const DrawerScreenStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />

      <Drawer.Screen
        name="DetailsScreenLahore"
        component={DetailsScreenLahore}
      />
      <Drawer.Screen name="DetailsScreenIsl" component={DetailsScreenIsl} />
      <Drawer.Screen name="DetailsScreenKr" component={DetailsScreenKr} />
      <Drawer.Screen name="DetailsScreenMur" component={DetailsScreenMur} />
      <Drawer.Screen name="DetailsScreenMul" component={DetailsScreenMul} />

      <Drawer.Screen name="HomeScreen" component={HomeScreen} />

      <Drawer.Screen name="HotelsLahore" component={HotelsLahore} />
    </Drawer.Navigator>
  );
};
