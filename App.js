import React from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./MainTabScreen";
import Bookmark from "./Bookmark";
import Settings from "./Settings";
import GetInScreens from "./GetInScreens";
import { DrawerContent } from "./DrawerContent";
import { AuthContext } from "./components/context";
import { ActivityIndicator } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Users from "./modal/users";
import { LogBox } from "react-native";
import DetailsScreenLahore from "./DetailScreens/DetailsScreenLahore copy 2";
import DetailsScreenIsl from "./DetailScreens/DetailsScreenIsl";
import DetailsScreenKr from "./DetailScreens/DetailsScreenkr";
import DetailsScreenMur from "./DetailScreens/DetailsScreenMur";
import DetailsScreenMul from "./DetailScreens/DetailsScreenMul";
import Guide from "./Guide";
import HotelsIsl from "./DetailScreens/VerticalComponents/HotelsIsl";
import HotelsLahore from "./DetailScreens/VerticalComponents/HotelsLahore";
import HotelsKar from "./DetailScreens/VerticalComponents/HotelsKar";
import HotelsMur from "./DetailScreens/VerticalComponents/HotelsMur";
import Products from "./DetailScreens/VerticalComponents/Products";
import RentalProducts from "./DetailScreens/VerticalComponents/RentalProducts";
import ExploreScreen from "./ExploreScreen";
import Location from "./Location";

import R1p1 from "./DetailScreens/InnerProducts/R1p1";
import R1p2 from "./DetailScreens/InnerProducts/R1p2";
import R2p1 from "./DetailScreens/InnerProducts/R2p1";
import R2p2 from "./DetailScreens/InnerProducts/R2p2";
import R3p1 from "./DetailScreens/InnerProducts/R3p1";
import R3p2 from "./DetailScreens/InnerProducts/R3p2";
import HomeScreen from "./HomeScreen";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
const Drawer = createDrawerNavigator();

export default function App() {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    username: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          username: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        // setUserToken("dfg");
        // setIsLoading(false);
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;
        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.log(e);
        }
        // console.log("user token : ", userToken);
        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }

        dispatch({ type: "LOGOUT" });
      },

      signUp: () => {
        // setUserToken("dfg");
        // setIsLoading(false);
      },
    }),
    []
  );
  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }

      // console.log("user token : ", userToken);

      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="BookmarkDrawer" component={Bookmark} />
            <Drawer.Screen
              name="DetailsScreenLahore"
              component={DetailsScreenLahore}
            />
            <Drawer.Screen
              name="DetailsScreenIsl"
              component={DetailsScreenIsl}
            />
            <Drawer.Screen name="DetailsScreenKr" component={DetailsScreenKr} />
            <Drawer.Screen
              name="DetailsScreenMur"
              component={DetailsScreenMur}
            />
            <Drawer.Screen
              name="DetailsScreenMul"
              component={DetailsScreenMul}
            />
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
        ) : (
          <GetInScreens />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
