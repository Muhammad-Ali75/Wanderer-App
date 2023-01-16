import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BookingCard from "./src/Components/BookingCard";

const Notifications = () => {
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
    {
      id: "57",
      post_title: "Guide",
      postimage: "https://cdn-icons-png.flaticon.com/512/4140/4140049.png",
      post_city: "lahore",
      username: "Minahil",
      notification: "What's the issue sir !",
      time: "12:00",
    },
    {
      id: "56",
      post_title: "Guide",
      postimage: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      post_city: "lahore",
      username: "Ali",
      notification: "Thank You Sir ",
      time: "11:00",
    },
    {
      id: "55",
      post_title: "Guide",
      postimage: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png",
      post_city: "lahore",
      username: "Ahsan",
      notification: "Thanks for co-operation sir....",
      time: "9:00",
    },
    {
      id: "54",
      post_title: "Guide",
      postimage: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
      post_city: "lahore",
      username: "Jzb",
      notification: "Any issue Sir!",
      time: "1:00",
    },
    {
      id: "53",
      post_title: "Guide",
      postimage: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      post_city: "lahore",
      username: "Zameet",
      notification: "It was a nice meeting.....",
      time: "2:00",
    },
    {
      id: "52",
      post_title: "Guide",
      postimage: "https://cdn-icons-png.flaticon.com/512/4140/4140049.png",
      post_city: "lahore",
      username: "Ayesha",
      notification: "Hi! ",
      time: "2:00",
    },
    {
      id: "51",
      post_title: "Guide ",
      postimage: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png",
      post_city: "lahore",
      username: "Jahanzaib",
      notification: "Thanks for booking!",
      time: "2:00",
    },
    {
      id: "50",
      post_title: "Guide ",
      postimage: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      post_city: "lahore",
      username: "Adil",
      notification: "What's the issue Sir!",
      time: "2:00",
    },
  ];
  return (
    <View style={styles.container0}>
      <Text style={styles.header}>Tour Bookings</Text>
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

export default Notifications;

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
