import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

const HotelDetails = ({ route, navigation }) => {
  const { hoteldetails } = route.params;

  return (
    <LinearGradient colors={["white", "white"]} style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../../../images/backArrow.png")} />
      </TouchableOpacity>
      <View style={styles.header}>
        <FlatList
          data={hoteldetails.imageurls}
          horizontal={true}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <Image
                style={{ height: "100%", width: 500 }}
                source={{ uri: item }}
              />
            );
          }}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={4}>
          {hoteldetails.name}
        </Text>
        <Text style={styles.price}>Rs. {hoteldetails.rentperday}/day</Text>
        <Text style={styles.text}> Reviews:</Text>

        <Text style={styles.reviewValue}>{"  "}4.8</Text>
        <Text style={styles.description}>Description:</Text>
        <Text style={styles.text}>{hoteldetails.discription}</Text>

        <View style={styles.button}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#606A6D", "#14FC9B"]}
              style={styles.SignIn}
            >
              <Text style={styles.textSign}>Book Now</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default HotelDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    alignSelf: "flex-start",
    top: "7%",
    left: "5%",
  },
  footer: {
    height: 400,
    backgroundColor: "#6B3940",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginTop: -25,
  },

  logo: {
    width: 230,
    height: 290,
  },

  title: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    maxWidth: "55%",
  },

  text: {
    color: "grey",
    marginTop: 10,
  },

  button: {
    alignItems: "flex-end",
    marginTop: 70,
  },

  SignIn: {
    width: 350,
    height: 50,
    justifyContent: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontSize: 16,
    marginTop: 15,
    fontWeight: "bold",
  },
  price: {
    color: "gold",
    marginLeft: 300,
    fontSize: 20,
    marginTop: -28,
  },
  reviewValue: {
    color: "gold",
    marginLeft: 60,
    marginTop: -19,
  },
  description: {
    marginTop: 10,
    marginLeft: 3,
    color: "white",
  },
});
