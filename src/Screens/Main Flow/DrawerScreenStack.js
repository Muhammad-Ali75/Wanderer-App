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
import RentalProducts from "../../../DetailScreens/VerticalComponents/RentalProducts";

import R1p1 from "../../../DetailScreens/InnerProducts/R1p1";
import R1p2 from "../../../DetailScreens/InnerProducts/R1p2";
import R2p1 from "../../../DetailScreens/InnerProducts/R2p1";
import R2p2 from "../../../DetailScreens/InnerProducts/R2p2";
import R3p1 from "../../../DetailScreens/InnerProducts/R3p1";
import R3p2 from "../../../DetailScreens/InnerProducts/R3p2";

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
      <Drawer.Screen name="RentalProducts" component={RentalProducts} />

      <Drawer.Screen name="R1p1" component={R1p1} />
      <Drawer.Screen name="R1p2" component={R1p2} />
      <Drawer.Screen name="R2p1" component={R2p1} />
      <Drawer.Screen name="R2p2" component={R2p2} />
      <Drawer.Screen name="R3p1" component={R3p1} />
      <Drawer.Screen name="R3p2" component={R3p2} />
    </Drawer.Navigator>
  );
};
