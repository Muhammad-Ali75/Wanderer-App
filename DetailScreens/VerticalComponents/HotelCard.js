import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HotelCard = ({ name, city, price, id, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <View>
          <Text style={styles.nameText} ellipsizeMode="tail" numberOfLines={2}>
            {name}
          </Text>
          <Text style={{ color: "grey", marginLeft: 3 }}>{city}</Text>
        </View>

        <View>
          <Text style={{ color: "#F4A40E", fontSize: 20 }}>Rs.{price}</Text>
          <Text style={{ color: "grey", fontSize: 12 }}>Per Night </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <LinearGradient colors={["#65C25E", "#606A6D"]} style={styles.gradient}>
          <Text style={styles.text}>Book Now</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "white",
    margin: 10,
    height: 450,
    elevation: 3,
  },
  image: {
    margin: 30,
    borderRadius: 10,
    height: 250,
    width: "88%",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
    marginTop: -20,
  },
  nameText: {
    fontSize: 25,
    color: "black",
    maxWidth: "80%",
  },
  button: {
    alignItems: "center",
    marginTop: -20,
  },
  gradient: {
    width: 200,
    height: 45,
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 16,
    marginTop: 13,
    fontWeight: "bold",
  },
});
export default HotelCard;
