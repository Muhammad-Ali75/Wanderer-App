import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "../../../DrawerContent";
import MainTabScreen from "../../../MainTabScreen";
import Settings from "../../../Settings";
import Bookmark from "../../../Bookmark";

import DetailsScreenIsl from "../../../DetailScreens/DetailsScreenIsl";
import DetailsScreenLahore from "../../../DetailScreens/DetailsScreenLahore copy 2";
import DetailsScreenMul from "../../../DetailScreens/DetailsScreenMul";
import DetailsScreenKr from "../../../DetailScreens/DetailsScreenkr";
import DetailsScreenMur from "../../../DetailScreens/DetailsScreenMur";

import HomeScreen from "../../../HomeScreen";
import ExploreScreen from "../../../ExploreScreen";
import Location from "../../../Location";
import Guide from "../../../Guide";

import HotelsKar from "../../../DetailScreens/VerticalComponents/HotelsKar";
import HotelsLahore from "../../../DetailScreens/VerticalComponents/HotelsLahore";
import HotelsMur from "../../../DetailScreens/VerticalComponents/HotelsMur";
import HotelsIsl from "../../../DetailScreens/VerticalComponents/HotelsIsl";

import Products from "../../../DetailScreens/VerticalComponents/Products";
import ProductDetails from "../../../DetailScreens/VerticalComponents/ProductDetails";

const Drawer = createDrawerNavigator();

export const DrawerScreenStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="BookmarkDrawer" component={Bookmark} />

      <Drawer.Screen
        name="DetailsScreenLahore"
        component={DetailsScreenLahore}
      />
      <Drawer.Screen name="DetailsScreenIsl" component={DetailsScreenIsl} />
      <Drawer.Screen name="DetailsScreenKr" component={DetailsScreenKr} />
      <Drawer.Screen name="DetailsScreenMur" component={DetailsScreenMur} />
      <Drawer.Screen name="DetailsScreenMul" component={DetailsScreenMul} />

      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ExploreScreen" component={ExploreScreen} />
      <Drawer.Screen name="Location" component={Location} />

      <Drawer.Screen name="Guide" component={Guide} />
      <Drawer.Screen name="HotelsIsl" component={HotelsIsl} />
      <Drawer.Screen name="HotelsLahore" component={HotelsLahore} />
      <Drawer.Screen name="HotelsKar" component={HotelsKar} />
      <Drawer.Screen name="HotelsMur" component={HotelsMur} />

      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="ProductDetails" component={ProductDetails} />
    </Drawer.Navigator>
  );
};
