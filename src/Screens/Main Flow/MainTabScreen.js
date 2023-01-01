import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "@expo/vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import homeScreen from "../../../HomeScreen";

import { FontAwesome5 } from "@expo/vector-icons";
import Hotels from "./Hotels";
import HotelDetails from "./HotelsDetails";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

const HomeStack = createStackNavigator();
const ProductStack = createStackNavigator();
const HotelStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="white" shifting={true}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "teal",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="HotelsList"
      component={HotelStackScreen}
      options={{
        tabBarLabel: "Hotels",
        tabBarColor: "#6B3940",

        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="hotel" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ProductsList"
      component={ProductStackScreen}
      options={{
        tabBarLabel: "Products",
        tabBarColor: "#292929",

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
        backgroundColor: "teal",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home "
      component={homeScreen}
      options={{
        title: "Home Screen",
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
