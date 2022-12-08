import React from "react";
import { View, Text, Image, ImageBackground, br } from "react-native";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

const RentalProducts = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#FFF",
          flex: 1,
          height: 1400,
        }}
      >
        <View
          style={{
            backgroundColor: "#00a46c",
            height: "18%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Products")}>
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
                Rent It, {"\n"}
              </Text>
              <Text
                style={{
                  fontSize: 28,
                  color: "black",
                  fontWeight: "bold",
                  marginLeft: 30,
                  marginTop: -30,
                }}
              >
                Save It.{" "}
              </Text>
            </Animatable.View>
            <View
              style={{
                width: "50%",
                alignItems: "flex-end",
              }}
            >
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
            colors={["#00a46c", "transparent"]}
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
                backgroundColor: "#292929",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
                marginRight: 60,
                marginTop: 10,
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 13,
                    color: "#FFF",
                  }}
                >
                  New Products
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
              colors={["#C6DDC0", "transparent"]}
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
                style={{
                  height: 180,
                  width: 130,
                  marginLeft: 20,
                  overflow: "hidden",
                }}
                source={require("../../images/rbag3.png")}
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
                  Blue Bag{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 50,
                  }}
                >
                  $4
                </Text>
                <Text style={{ marginLeft: -30, marginTop: 25, fontSize: 10 }}>
                  Per Day
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  marginTop: -15,
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
                source={require("../../images/rbag2.png")}
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
                  Stylx Bagpack{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 20,
                  }}
                >
                  $2
                </Text>

                <Text style={{ marginLeft: -30, marginTop: 25, fontSize: 10 }}>
                  Per Day
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  marginTop: -15,
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
                source={require("../../images/rbag4.png")}
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
                  Big Bag{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 50,
                  }}
                >
                  $4
                </Text>
                <Text style={{ marginLeft: -30, marginTop: 25, fontSize: 10 }}>
                  Per Day
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  marginTop: -15,
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
                source={require("../../images/rbag1.png")}
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
                  $2
                </Text>
                <Text style={{ marginLeft: -30, marginTop: 25, fontSize: 10 }}>
                  Per Day
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  marginTop: -15,
                }}
              >
                3.5* (10){" "}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </Animatable.View>
        <Animatable.View
          ///////////////////////////////////////////////////////////////////////////////jACKETS ROW START
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
                fontSize: 20,
                color: "#585a61",
              }}
            >
              JACKETS{" "}
            </Text>
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
              colors={["#C6DDC0", "transparent"]}
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
              onPress={() => navigation.navigate("R2p1")}
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
                source={require("../../images/rjack1.png")}
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
                  Nike Flex{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 40,
                  }}
                >
                  $6
                </Text>
                <Text style={{ marginLeft: -30, marginTop: 25, fontSize: 10 }}>
                  Per Day
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  marginTop: -15,
                }}
              >
                4.8* (7)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("R2p2")}
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
                source={require("../../images/rjack2.png")}
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
                  Red Hood{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 45,
                  }}
                >
                  $6
                </Text>
                <Text style={{ marginLeft: -30, marginTop: 25, fontSize: 10 }}>
                  Per Day
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  marginTop: -15,
                }}
              >
                4.2* (3){" "}
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
                source={require("../../images/rjack3.png")}
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
                  Big Man{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 50,
                  }}
                >
                  $4
                </Text>
                <Text style={{ marginLeft: -30, marginTop: 25, fontSize: 10 }}>
                  Per Day
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  marginTop: -15,
                }}
              >
                4.1* (8){" "}
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
                source={require("../../images/rjack4.png")}
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
                    paddingLeft: 55,
                  }}
                >
                  $6
                </Text>
                <Text style={{ marginLeft: -30, marginTop: 25, fontSize: 10 }}>
                  Per Day
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  marginTop: -15,
                }}
              >
                4.5* (7){" "}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </Animatable.View>
        <Animatable.View
          //////////////////////////////////////////////////////////////////////////////SHOES ROW START

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
                fontSize: 20,
                color: "#585a61",
              }}
            >
              SHOES
            </Text>
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
              colors={["#C6DDC0", "transparent"]}
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
              onPress={() => navigation.navigate("R3p1")}
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
                source={require("../../images/rs4.png")}
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
                  Nike Air{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 50,
                  }}
                >
                  $8
                </Text>
                <Text style={{ marginLeft: -30, marginTop: 25, fontSize: 10 }}>
                  Per Day
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  marginTop: -15,
                }}
              >
                4.6* (2)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("R3p2")}
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
                style={{ height: 150, width: 160, overflow: "hidden" }}
                source={require("../../images/rs2.png")}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 40,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Adidas{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 60,
                  }}
                >
                  $5
                </Text>
                <Text style={{ marginLeft: -30, marginTop: 25, fontSize: 10 }}>
                  Per Day
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  marginTop: -15,
                }}
              >
                4.7* (7){" "}
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
                source={require("../../images/rs3.png")}
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
                  PUMA X3{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 50,
                  }}
                >
                  $6
                </Text>
                <Text style={{ marginLeft: -30, marginTop: 25, fontSize: 10 }}>
                  Per Day
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  marginTop: -15,
                }}
              >
                4.2* (8){" "}
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
                style={{
                  height: 130,
                  marginTop: 50,
                  width: 160,
                  overflow: "hidden",
                }}
                source={require("../../images/rs1.png")}
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
                  Nike Box{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 55,
                  }}
                >
                  $5
                </Text>
                <Text style={{ marginLeft: -30, marginTop: 25, fontSize: 10 }}>
                  Per Day
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#FCBC1D",
                  marginTop: -15,
                }}
              >
                4.3* (9){" "}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};
export default RentalProducts;
