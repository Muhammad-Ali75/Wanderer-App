import React from "react";

import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Notifications = () => {
  const data = [
    {
      id: "58",
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
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View style={styles.HeaderLeftImageView}>
                <Image
                  style={styles.HeaderLeftImage}
                  source={{ uri: item.postimage }}
                />
              </View>
              <View style={{ marginLeft: 10, flexDirection: "row" }}>
                <View>
                  <Text style={{ color: "teal", fontSize: 15 }}>
                    {" "}
                    {item.username} :
                  </Text>
                  <Text style={{ color: "grey" }}> {item.time}</Text>
                </View>
                <View>
                  <Text style={{ color: "grey", marginLeft: 7 }}>
                    {" "}
                    {item.notification}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          width: "30%",
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: "#00a46c",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 15,
            marginTop: 0,
          }}
        >
          <TouchableOpacity
          // onPress={() => navigation.navigate("Guide")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              Reply
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#00a46c",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 15,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
          // onPress={() => navigation.navigate("Guide")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              Reply
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#00a46c",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 15,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
          // onPress={() => navigation.navigate("Guide")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              Reply
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#00a46c",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 15,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
          // onPress={() => navigation.navigate("Guide")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              Reply
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#00a46c",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 15,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
          // onPress={() => navigation.navigate("Guide")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              Reply
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#00a46c",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 15,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
          // onPress={() => navigation.navigate("Guide")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              Reply
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#00a46c",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 15,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
          // onPress={() => navigation.navigate("Guide")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              Reply
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#00a46c",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 15,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
          // onPress={() => navigation.navigate("Guide")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              Reply
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#00a46c",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 15,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
          // onPress={() => navigation.navigate("Guide")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              Reply
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#00a46c",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 15,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
          // onPress={() => navigation.navigate("Guide")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              Reply
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#00a46c",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 15,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
          // onPress={() => navigation.navigate("Guide")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              Reply
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#00a46c",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 15,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
          // onPress={() => navigation.navigate("Guide")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              Reply
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Notifications;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",
    height: "100%",
    padding: 15,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
  HeaderLeftImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },

  HeaderLeftImageView: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
});
