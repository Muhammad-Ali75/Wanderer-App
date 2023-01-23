import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import homeScreen from '../../../HomeScreen';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Hotels from './HotelScreens/Hotels';
import HotelDetails from './HotelScreens/HotelsDetails';
import Products from './ProductScreens/Products';
import ProductDetails from './ProductScreens/ProductDetails';
import Tours from './TourScreens/Tours';
import TourDetails from './TourScreens/TourDetails';

const HomeStack = createStackNavigator();
const ProductStack = createStackNavigator();
const HotelStack = createStackNavigator();
const TourStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="HomeScreen" tabBarColor="black">
    <Tab.Screen
      name="HomeScreen"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: 'teal',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="TourScreens"
      component={TourStackScreen}
      options={{
        tabBarLabel: 'Tour',
        tabBarColor: '#292929',

        tabBarIcon: ({ color }) => (
          <MaterialIcons name="tour" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="HotelsScreens"
      component={HotelStackScreen}
      options={{
        tabBarLabel: 'Hotels',
        tabBarColor: '#6B3940',

        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="hotel" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ProductsScreens"
      component={ProductStackScreen}
      options={{
        tabBarLabel: 'Products',
        tabBarColor: '#5B2C6F',

        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="shopping-bag" size={24} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'teal',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <HomeStack.Screen
      name="Home "
      component={homeScreen}
      options={{
        title: 'Home Screen',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="teal"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);
const ProductStackScreen = () => (
  <ProductStack.Navigator screenOptions={{ headerShown: false }}>
    <ProductStack.Screen name="Produt" component={Products} />
    <ProductStack.Screen name="ProdutDetails" component={ProductDetails} />
  </ProductStack.Navigator>
);
const HotelStackScreen = () => (
  <HotelStack.Navigator screenOptions={{ headerShown: false }}>
    <HotelStack.Screen name="Hotel" component={Hotels} />
    <HotelStack.Screen name="HotelDetails" component={HotelDetails} />
  </HotelStack.Navigator>
);

const TourStackScreen = () => (
  <TourStack.Navigator screenOptions={{ headerShown: false }}>
    <TourStack.Screen name="Tour" component={Tours} />
    <TourStack.Screen name="TourDetails" component={TourDetails} />
  </TourStack.Navigator>
);
