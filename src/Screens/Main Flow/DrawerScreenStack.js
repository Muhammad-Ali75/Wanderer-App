import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "./DrawerContent";
import MainTabScreen from "./MainTabScreen";

import MyHotelBookings from "./MyHotelBookings";
import MyProductBookings from "./MyProductBookings";
import MyTourBookings from "./MyTourBookings";

const Drawer = createDrawerNavigator();

export const DrawerScreenStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={MainTabScreen} />
      <Drawer.Screen name="MyTours" component={MyTourBookings} />
      <Drawer.Screen name="MyHotels" component={MyHotelBookings} />
      <Drawer.Screen name="MyProducts" component={MyProductBookings} />
    </Drawer.Navigator>
  );
};
