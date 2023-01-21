import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Context as AuthContext } from "../.././Context/AuthContext";
import WandererAPI from "../../api/Wanderer";
import BookingCard from "../../Components/BookingCard";

const MyBookings = () => {
  const { state } = useContext(AuthContext);
  const user = JSON.parse(state.token);
  const [bookings, setBookings] = useState();

  useEffect(() => {
    getBookings();
  }, [bookings]);

  const getBookings = async () => {
    try {
      const response = await WandererAPI.post(
        "/api/tourbookings/getbookingbyuserid",
        {
          userid: user._id,
        }
      );
      setBookings(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const cancelBookings = async (bookingid, tourid) => {
    console.log(bookingid, tourid);
    try {
      const response = await WandererAPI.post(
        "/api/tourbookings/cancelbooking",
        {
          bookingid: bookingid,
          tourid: tourid,
        }
      );
      console.log(response);
      getBookings();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container0}>
      <Text style={styles.header}>Tour Bookings</Text>
      {bookings ? null : <ActivityIndicator size="large" />}
      <FlatList
        data={bookings}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          if (item.status === "cancelled") {
            return null;
          }
          return (
            <BookingCard bookingData={item} onCancelPress={cancelBookings} />
          );
        }}
      />
    </View>
  );
};

export default MyBookings;

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  header: {
    color: "white",
    fontSize: 40,
    margin: 40,
    fontWeight: "bold",
  },
});
