import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

const Products = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#FFF",
          flex: 1,
          height: 1300,
        }}
      >
        <View
          style={{
            backgroundColor: "#292929",
            height: "18%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../images/17.png")}
              style={{ marginTop: 40, width: 20, tintColor: "white" }}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 95,
              width: "100%",
            }}
          >
            <Animatable.View
              animation="fadeInLeft"
              duration={1000}
              style={{ width: "50%" }}
            >
              <Text
                style={{
                  fontSize: 28,
                  color: "#FFF",
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginTop: -50,
                }}
              >
                Get ready for your trip.{" "}
              </Text>
            </Animatable.View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Image
                source={require("../../images/w2.jpg")}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  marginRight: 25,
                  marginTop: -40,
                }}
              />
            </View>
          </View>
        </View>
        <Animatable.View animation="fadeIn" duration={1000}>
          <LinearGradient
            colors={["#292929", "transparent"]}
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
                placeholder="Search"
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
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <View
              style={{
                backgroundColor: "#00a46c",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
                marginRight: 30,
                marginTop: 30,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("RentalProducts")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 13,
                    color: "#FFF",
                  }}
                >
                  Rent Used Product
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
        <Animatable.View
          //////////////////////////////////////////////////////////////////////// BAGPACK part pics
          animation="fadeInLeft"
          duration={1000}
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
            marginTop: 35,
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "#585a61",
              }}
            >
              BAGPACKS
            </Text>
          </View>
        </Animatable.View>
        <Animatable.View
          animation="fadeInLeft"
          duration={1000}
          style={{ marginRight: 10 }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ height: 400, width: "100%" }}
          >
            <LinearGradient
              colors={["#B5B5B5", "transparent"]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                height: 100,
                marginTop: 220,
                top: 0,
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("R1p1")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160,
              }}
            >
              <Image
                style={{ height: 180, width: 160, overflow: "hidden" }}
                source={require("../../images/bag1.png")}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Monark{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 50,
                  }}
                >
                  $40
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  paddingTop: 3,
                }}
              >
                4* (10)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("R1p2")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160,
              }}
            >
              <Image
                style={{ height: 180, width: 160, overflow: "hidden" }}
                source={require("../../images/bag2.png")}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Nike Bagpack{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 20,
                  }}
                >
                  $70
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  paddingTop: 3,
                }}
              >
                4.5 (12){" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => navigation.navigate("DetailsScreenKr")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160,
              }}
            >
              <Image
                style={{ height: 180, width: 160, overflow: "hidden" }}
                source={require("../../images/bag3.png")}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Leather{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 50,
                  }}
                >
                  $40
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  paddingTop: 3,
                }}
              >
                4* (5){" "}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() => navigation.navigate("DetailsScreenMur")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160,
              }}
            >
              <Image
                style={{ height: 180, width: 160, overflow: "hidden" }}
                source={require("../../images/bag4.png")}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Bagpack{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 55,
                  }}
                >
                  $20
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  paddingTop: 3,
                }}
              >
                3.5* (10){" "}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};
export default Products;
