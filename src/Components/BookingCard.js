import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const BookingCard = ({ title, city, id }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10, flexDirection: "row" }}>
        <View>
          <Text style={{ color: "teal", fontSize: 15 }}>{title}</Text>
          <Text style={{ color: "grey" }}> ajhds</Text>
        </View>
        <View>
          <Text style={{ color: "grey", marginLeft: 7 }}>{city}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log(id)}>
        <Text style={styles.buttonText}>Cancle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "75%",
    margin: 8,
    marginLeft: 26,
    padding: 15,
    backgroundColor: "#292929",
    flexDirection: "row",
    elevation: 20,
    borderRadius: 15,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "red",
    height: 30,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 3,
    marginRight: 5,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FFF",
    marginTop: -2,
  },
});
