import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BookingCard from "../../Components/BookingCard";

const MyBookins = () => {
  const data = [
    {
      id: "59",
      post_title: "Guide",
      postimage: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      post_city: "lahore",
      username: "Taha",
      notification: "Any Problem Sir !",
      time: "10:00",
    },
    {
      id: "58",
      post_title: "Guide",
      postimage: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
      post_city: "lahore",
      username: "Adeel",
      notification: "Thanks for booking",
      time: "10:00",
    },
  ];
  return (
    <View style={styles.container0}>
      <Text style={styles.header}>Hotel Bookings</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <BookingCard
              title={item.post_title}
              city={item.post_city}
              id={item.id}
            />
          );
        }}
      />
    </View>
  );
};

export default MyBookins;

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
