import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";

const LahoreHotelPics = () => {
  return (
    <View>
      <View
        //pchotel swipe
        style={{
          borderWidth: 1,
          borderRadius: 20,
          marginTop: 10,
          marginBottom: 10,
          paddingBottom: 40,
          marginLeft: 10,
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 250, width: "100%" }}
        >
          <Image
            source={require("../../images/nishat11.jpg")}
            style={{
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10,
              height: 200,
              width: 350,
              marginHorizontal: 20,
            }}
          />

          <Image
            source={require("../../images/nishat2.jpeg")}
            style={{
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10,
              height: 200,
              width: 350,
              marginHorizontal: 20,
            }}
          />

          <Image
            source={require("../../images/nishat3.jpg")}
            style={{
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10,
              height: 200,
              width: 350,
              marginHorizontal: 20,
            }}
          />
        </ScrollView>
        <View>
          <Text
            style={{
              marginTop: 25,
              fontSize: 25,
              marginLeft: 25,
              color: "black",
            }}
          >
            Nishat Hotel{" "}
          </Text>
          <Text style={{ marginTop: 5, marginLeft: 25, color: "grey" }}>
            {" "}
            Lahore ~{" "}
          </Text>
        </View>
        <View style={{ marginLeft: 50, marginTop: -17 }}>
          <Image
            source={require("../../images/star.png")}
            style={{
              marginLeft: 40,
              borderRadius: 10,
              height: 15,
              width: 15,
              marginHorizontal: 20,
            }}
          />
        </View>
        <View style={{ marginLeft: 110, marginTop: -16 }}>
          <Text style={{ color: "#F4A40E" }}> 4.5 </Text>
        </View>
        <View style={{ marginLeft: 140, marginTop: -18 }}>
          <Text style={{ color: "#F4A40E" }}>(133) </Text>
        </View>
        <View style={{ marginLeft: 315, marginTop: -55.5 }}>
          <Text style={{ color: "#F4A40E", fontSize: 20 }}>$200 </Text>
        </View>
        <View style={{ marginLeft: 315, marginTop: 7 }}>
          <Text style={{ color: "grey", fontSize: 12 }}>Per Night </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 40,
          }}
        >
          <TouchableOpacity>
            <LinearGradient
              colors={["#606A6D", "#65C25E"]}
              style={{
                width: 320,
                height: 45,
                marginTop: 10,
                justifyContent: "center",
                borderRadius: 50,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  marginLeft: 15,
                  marginTop: 13,
                  fontWeight: "bold",
                }}
              >
                Book Now{" "}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View
        //pchotel swipe
        style={{
          borderWidth: 1,
          borderRadius: 20,
          marginTop: 10,
          marginBottom: 10,
          paddingBottom: 40,
          marginLeft: 10,
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 250, width: "100%" }}
        >
          <Image
            source={require("../../images/pcl1.jpg")}
            style={{
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10,
              height: 200,
              width: 350,
              marginHorizontal: 20,
            }}
          />

          <Image
            source={require("../../images/pcl2.jpg")}
            style={{
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10,
              height: 200,
              width: 350,
              marginHorizontal: 20,
            }}
          />

          <Image
            source={require("../../images/pcl3.jpg")}
            style={{
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10,
              height: 200,
              width: 350,
              marginHorizontal: 20,
            }}
          />
        </ScrollView>
        <View>
          <Text
            style={{
              marginTop: 25,
              fontSize: 25,
              marginLeft: 25,
              color: "black",
            }}
          >
            PC Hotel{" "}
          </Text>
          <Text style={{ marginTop: 5, marginLeft: 25, color: "grey" }}>
            {" "}
            Lahore ~{" "}
          </Text>
        </View>
        <View style={{ marginLeft: 50, marginTop: -17 }}>
          <Image
            source={require("../../images/star.png")}
            style={{
              marginLeft: 40,
              borderRadius: 10,
              height: 15,
              width: 15,
              marginHorizontal: 20,
            }}
          />
        </View>
        <View style={{ marginLeft: 110, marginTop: -16 }}>
          <Text style={{ color: "#F4A40E" }}> 4.5 </Text>
        </View>
        <View style={{ marginLeft: 140, marginTop: -18 }}>
          <Text style={{ color: "#F4A40E" }}>(133) </Text>
        </View>
        <View style={{ marginLeft: 315, marginTop: -55.5 }}>
          <Text style={{ color: "#F4A40E", fontSize: 20 }}>$250 </Text>
        </View>
        <View style={{ marginLeft: 315, marginTop: 7 }}>
          <Text style={{ color: "grey", fontSize: 12 }}>Per Night </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 40,
          }}
        >
          <TouchableOpacity>
            <LinearGradient
              colors={["#606A6D", "#65C25E"]}
              style={{
                width: 320,
                height: 45,
                marginTop: 10,
                justifyContent: "center",
                borderRadius: 50,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  marginLeft: 15,
                  marginTop: 13,
                  fontWeight: "bold",
                }}
              >
                Book Now{" "}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <View
        //pchotel swipe
        style={{
          borderWidth: 1,
          borderRadius: 20,
          marginTop: 10,
          marginBottom: 10,
          paddingBottom: 40,
          marginLeft: 10,
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 250, width: "100%" }}
        >
          <Image
            source={require("../../images/avari1.jpg")}
            style={{
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10,
              height: 200,
              width: 350,
              marginHorizontal: 20,
            }}
          />

          <Image
            source={require("../../images/avari2.jpeg")}
            style={{
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10,
              height: 200,
              width: 350,
              marginHorizontal: 20,
            }}
          />

          <Image
            source={require("../../images/avari3.jpg")}
            style={{
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10,
              height: 200,
              width: 350,
              marginHorizontal: 20,
            }}
          />
        </ScrollView>
        <View>
          <Text
            style={{
              marginTop: 25,
              fontSize: 25,
              marginLeft: 25,
              color: "black",
            }}
          >
            Avari Hotel{" "}
          </Text>
          <Text style={{ marginTop: 5, marginLeft: 25, color: "grey" }}>
            {" "}
            Lahore ~{" "}
          </Text>
        </View>
        <View style={{ marginLeft: 50, marginTop: -17 }}>
          <Image
            source={require("../../images/star.png")}
            style={{
              marginLeft: 40,
              borderRadius: 10,
              height: 15,
              width: 15,
              marginHorizontal: 20,
            }}
          />
        </View>
        <View style={{ marginLeft: 110, marginTop: -16 }}>
          <Text style={{ color: "#F4A40E" }}> 4.8 </Text>
        </View>
        <View style={{ marginLeft: 140, marginTop: -18 }}>
          <Text style={{ color: "#F4A40E" }}>(153) </Text>
        </View>
        <View style={{ marginLeft: 315, marginTop: -55.5 }}>
          <Text style={{ color: "#F4A40E", fontSize: 20 }}>$300 </Text>
        </View>
        <View style={{ marginLeft: 315, marginTop: 7 }}>
          <Text style={{ color: "grey", fontSize: 12 }}>Per Night </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 40,
          }}
        >
          <TouchableOpacity>
            <LinearGradient
              colors={["#606A6D", "#65C25E"]}
              style={{
                width: 320,
                height: 45,
                marginTop: 10,
                justifyContent: "center",
                borderRadius: 50,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  marginLeft: 15,
                  marginTop: 13,
                  fontWeight: "bold",
                }}
              >
                Book Now{" "}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
export default LahoreHotelPics;
