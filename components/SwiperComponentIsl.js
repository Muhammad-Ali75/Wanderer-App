import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const SwiperComponent = () => {
  return (
    <Swiper
      style={StyleSheet.wrapper}
      dotStyle={{
        marginTop: -200,
        width: 15,
        height: 5,
        borderRadius: 10,
        backgroundColor: "grey",
      }}
      activeDotColor="grey"
      activeDotStyle={{
        marginTop: -200,
        width: 30,
        height: 6,
        borderRadius: 10,
        backgroundColor: "grey",
        activeDotColor: "grey",
      }}
    >
      <View style={styles.slide}>
        <Image
          source={require("../images/isl1.webp")}
          style={{
            marginLeft: 120,
            marginBottom: 130,
            borderRadius: 50,
            height: 440,

            width: 320,
            marginTop: 60,
            resizeMode: "stretch",
          }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../images/isl2.jpeg")}
          style={{
            marginLeft: 120,
            marginBottom: 130,
            borderRadius: 50,

            height: 440,

            width: 320,
            marginTop: 60,
            resizeMode: "stretch",
          }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../images/isl3.webp")}
          style={{
            marginLeft: 120,
            marginBottom: 130,
            borderRadius: 50,

            height: 440,

            width: 320,
            marginTop: 60,
            resizeMode: "stretch",
          }}
        />
      </View>
    </Swiper>
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
export default SwiperComponent;
