import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './DrawerContent';
import Icon from '@expo/vector-icons/MaterialIcons';
import MainTabScreen from './MainTabScreen';

import MyHotelBookings from './HotelScreens/MyHotelBookings';
import MyProductBookings from './ProductScreens/MyProductBookings';
import MyTourBookings from './TourScreens/MyTourBookings';

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
