import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DetailsScreenLahore from "./DetailScreens/DetailsScreenIsl";
import * as Animatable from "react-native-animatable";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#F6F5EF",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "teal",
            height: "20%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 25,
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
                }}
              >
                What's Your Favourite Place ?{" "}
              </Text>
            </Animatable.View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Image
                source={require("./images/w2.jpg")}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                }}
              />
            </View>
          </View>
        </View>
        <View>
          <LinearGradient
            colors={["teal", "transparent"]}
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
                source={require("./images/3.png")}
                style={{ marginLeft: 30, height: 20, width: 20 }}
              />
            </View>
          </LinearGradient>
        </View>
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
              Recommended
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <View
              style={{
                backgroundColor: "#00a46c",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Guide")}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 13,
                    color: "#FFF",
                  }}
                >
                  More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
        <Animatable.View
          animation="fadeInLeft"
          duration={1000}
          style={{ marginRight: 10 }}
        >
          <ScrollView
            // upper part pics
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ height: 400, width: "100%" }}
          >
            <LinearGradient
              colors={["rgba(0,164,109,0.09)", "transparent"]}
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
              onPress={() => navigation.navigate("DetailsScreenLahore")}
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
                source={require("./images/fort.jpg")}
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
                  Lahore{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 50,
                  }}
                >
                  $400
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#b1e5d3",
                  paddingTop: 3,
                }}
              >
                Pakistan
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("DetailsScreenIsl")}
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
                source={require("./images/fm.jpeg")}
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
                  Islamabad{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 40,
                  }}
                >
                  $400
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#b1e5d3",
                  paddingTop: 3,
                }}
              >
                Pakistan{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailsScreenKr")}
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
                source={require("./images/quaid.jpeg")}
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
                  Karachi{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 50,
                  }}
                >
                  $400
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#b1e5d3",
                  paddingTop: 3,
                }}
              >
                Pakistan{" "}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("DetailsScreenMur")}
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
                source={require("./images/muree.jpeg")}
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
                  North{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 65,
                  }}
                >
                  $400
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#b1e5d3",
                  paddingTop: 3,
                }}
              >
                Pakistan{" "}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </Animatable.View>
        <Animatable.View
          animation="fadeInLeft"
          duration={1000}
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
            marginTop: -80,
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
              Featured Places
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <View
              style={{
                backgroundColor: "#00a46c",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Guide")}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 13,
                    color: "#FFF",
                  }}
                >
                  More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
        <Animatable.View
          animation="fadeInLeft"
          duration={1000}
          style={{ height: 300, marginRight: 10 }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: -100 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailsScreenLahore")}
            >
              <Image
                source={require("./images/minar.jpeg")}
                style={{
                  marginTop: 20,
                  borderRadius: 10,
                  height: 200,
                  marginHorizontal: 20,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailsScreenKr")}
            >
              <Image
                source={require("./images/karachi1.jpeg")}
                style={{
                  marginTop: 20,
                  borderRadius: 10,
                  height: 200,
                  marginHorizontal: 20,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailsScreenMul")}
            >
              <Image
                source={require("./images/multan.jpeg")}
                style={{
                  marginTop: 20,
                  borderRadius: 10,
                  height: 200,
                  marginHorizontal: 20,
                }}
              />
            </TouchableOpacity>
          </ScrollView>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
