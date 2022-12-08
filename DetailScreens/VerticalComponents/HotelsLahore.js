import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  TextComponent,
  StyleSheet,
  StatusBar,
} from "react-native";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import * as Animatable from "react-native-animatable";
import LahoreHotelPics from "../hotelsSwipe/LahoreHotelPics";
import Swiper from "react-native-swiper";

const HotelsLahore = ({ navigation }) => {
  return (
    <ScrollView
      vertical
      showsVerticalScrollIndicator={false}
      style={{ height: 2500 }}
    >
      <View
        style={{
          backgroundColor: "#F6F5EF",
          flex: 1,
          height: 2000,
        }}
      >
        <View
          style={{
            backgroundColor: "#6B3940",
            height: "15%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                marginTop: 30,
                marginLeft: 5,
                tintColor: "white",
                width: "5%",
                height: 13,
              }}
              source={require("../../images/17.png")}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 60,
              width: "100%",
            }}
          >
            <Animatable.View
              animation="fadeIn"
              duration={3000}
              style={{ width: "50%" }}
            >
              <Text
                style={{
                  fontSize: 28,
                  color: "#FFF",
                  fontWeight: "bold",
                  marginTop: 10,
                }}
              >
                Where would you want to go ?{" "}
              </Text>
            </Animatable.View>
            <View
              style={{ width: "50%", alignItems: "flex-end", marginTop: 35 }}
            >
              <Image
                source={require("../../images/w2.jpg")}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                }}
              />
            </View>
          </View>
        </View>
        <Animatable.View animation="fadeIn" duration={1000}>
          <LinearGradient
            colors={["#6B3940", "transparent"]}
            style={{
              left: 0,
              right: 0,
              height: 90,
              marginTop: -45,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFF",
                paddingVertical: 8,
                paddingHorizontal: 20,
                marginHorizontal: 20,
                borderRadius: 15,
                marginTop: 25,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="Hotels"
                placeholderTextColor="#b1e5d3"
                style={{
                  color: "teal",
                  fontWeight: "bold",
                  fontSize: 18,
                  width: 260,
                }}
              />
              <Image
                source={require("../../images/3.png")}
                style={{ marginLeft: 30, height: 20, width: 20 }}
              />
            </View>
          </LinearGradient>
        </Animatable.View>
        <View style={{ backgroundColor: "#F6F5EF" }}>
          <Animatable.View
            animation="fadeInLeft"
            duration={1000}
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              width: "100%",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#585a61",
                }}
              >
                Recommended Hotels
              </Text>
            </View>
          </Animatable.View>
          <Animatable.View
            animation="fadeInLeft"
            duration={1000}
            style={{ height: "80%", marginRight: 10 }}
          >
            <View>
              <LahoreHotelPics />
            </View>
          </Animatable.View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});
export default HotelsLahore;
