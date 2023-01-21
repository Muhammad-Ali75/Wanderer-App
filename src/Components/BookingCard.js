import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const BookingCard = ({ bookingData, onCancelPress: onCancelPress }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10, flexDirection: "row" }}>
        <View>
          <Text style={{ color: "teal", fontSize: 15 }}>
            {bookingData.tour}
          </Text>
          <Text style={{ color: "grey" }}> {bookingData.status}</Text>
        </View>
        <View>
          <Text style={{ color: "grey", marginLeft: 7 }}>
            {bookingData.totaldays}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onCancelPress(bookingData._id, bookingData.tourid)}
      >
        <Text style={styles.buttonText}>Cancel</Text>
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
