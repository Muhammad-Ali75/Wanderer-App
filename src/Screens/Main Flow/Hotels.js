import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import HotelCard from "./HotelCard";
import wandererApi from "../../api/Wanderer";
import SearchBar from "../../Components/SearchBar";

const HotelsLahore = ({ navigation }) => {
  const [hotelsData, setHotelData] = useState(null);

  useEffect(() => {
    apicall();
  }, []);

  const apicall = async () => {
    try {
      const response = await wandererApi.get("/api/rooms/getallrooms");
      setHotelData(response.data);
      console.log("HOTELSDATA::::", hotelsData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View style={styles.header}>
        <View style={styles.header2}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.backArrow}
              source={require("../../../images/backArrow.png")}
            />
          </TouchableOpacity>
          <View style={styles.container}>
            <Animatable.View
              animation="fadeIn"
              duration={3000}
              style={{ width: "50%" }}
            >
              <Text style={styles.text}>Where would you want to go ? </Text>
            </Animatable.View>
            <View style={styles.logoContainer}>
              <Image
                source={require("../../../images/w2.jpg")}
                style={styles.logo}
              />
            </View>
          </View>
        </View>
      </View>
      <SearchBar />
      {hotelsData && (
        <FlatList
          data={hotelsData}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return <HotelCard hotel={item} />;
          }}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F6F5EF",
    height: "25%",
  },
  header2: {
    backgroundColor: "#6B3940",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  backArrow: {
    marginTop: 50,
    marginLeft: 5,
    tintColor: "white",
    width: "5%",
    height: 13,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  text: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
    marginTop: 10,
  },
  logoContainer: {
    width: "50%",
    alignItems: "flex-end",
    marginTop: 35,
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});
export default HotelsLahore;
