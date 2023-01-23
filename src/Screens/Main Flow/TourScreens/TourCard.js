import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TourCard = ({ tour }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate("TourDetails", { tourdetails: tour });
      }}
    >
      <Image source={{ uri: tour.imageurls[0] }} style={styles.image} />
      <View style={styles.info}>
        <View style={{ flex: 3 }}>
          <Text style={styles.nameText} ellipsizeMode="tail" numberOfLines={2}>
            {tour.name}
          </Text>
          <Text style={{ color: "grey", marginLeft: 3 }}>{tour.city}</Text>
        </View>

        <View style={styles.right}>
          <Text style={{ color: "#F4A40E", fontSize: 20 }}>
            Rs.{tour.rentperday}
          </Text>
          <Text style={{ color: "grey", fontSize: 12 }}>Per Night </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TourCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: "white",
    margin: 10,
    height: 400,
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
  right: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 10,
  },
});
