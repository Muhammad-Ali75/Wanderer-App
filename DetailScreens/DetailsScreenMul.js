import React from "react";
import { View, Text, Image } from "react-native";
import SwiperComponent from "../components/SwiperComponentMul";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

const DetailsScreenMul = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          height: "90%",
        }}
      >
        <View style={{ width: "30%", paddingLeft: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../images/17.png")}
              style={{ marginVertical: 40 }}
            />
          </TouchableOpacity>
          <Animatable.View
            animation="fadeInLeft"
            duration={1000}
            style={{
              backgroundColor: "#FFF",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Products")}>
              <Image
                style={{ width: 40, height: 40, tintColor: "teal" }}
                source={require("../images/products.png")}
              />
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            animation="fadeInLeft"
            duration={1000}
            style={{
              backgroundColor: "#FFF",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image
              style={{ width: 40, height: 40, tintColor: "teal" }}
              source={require("../images/hotell.png")}
            />
          </Animatable.View>
          <Animatable.View
            animation="fadeInLeft"
            duration={1000}
            style={{
              backgroundColor: "#FFF",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Location")}>
              <Image
                style={{ width: 40, height: 40, tintColor: "teal" }}
                source={require("../images/tour.png")}
              />
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            animation="fadeInLeft"
            duration={1000}
            style={{
              backgroundColor: "#FFF",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image
              style={{ width: 40, height: 40, tintColor: "teal" }}
              source={require("../images/car.png")}
            />
          </Animatable.View>
        </View>
        <Animatable.View
          animation="fadeInLeft"
          duration={1000}
          style={{ width: "90%" }}
        >
          <SwiperComponent />
        </Animatable.View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: -80,
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            color: "#62636a",
          }}
        >
          Multan{" "}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#00a46c",
            paddingLeft: 190,
            fontSize: 20,
          }}
        >
          $400
        </Text>
      </View>

      <Text
        style={{
          paddingHorizontal: 20,
          fontWeight: "bold",
          color: "#b1e5d3",
          paddingTop: 3,
          fontSize: 20,
        }}
      >
        Pakistan{" "}
      </Text>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Guide")}
          style={{
            width: 185,
            backgroundColor: "teal",
            height: 70,
            marginTop: 20,
            borderTopRightRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontSize: 17,
            }}
          >
            Guide!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 185,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <Text
            style={{
              color: "#62636a",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Description
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DetailsScreenMul;
