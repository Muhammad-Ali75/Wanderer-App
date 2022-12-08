import React from "react";

import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "@expo/vector-icons/Feather";
import * as Animatable from "react-native-animatable";

const StartScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["white", "white"]} style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./images/mountain.jpg")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Let's pack for your trip</Text>
        <Text style={styles.text}>SignIn to continue.</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <LinearGradient
              colors={["#606A6D", "#77D0D8"]}
              style={styles.SignIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <Feather
                style={{ marginTop: 15 }}
                name="chevron-right"
                color="white"
                size={20}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default StartScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 250,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },

  logo: {
    marginLeft: 35,
    marginTop: 26,
    width: 450,
    height: 660,
  },

  title: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },

  text: {
    color: "grey",
    marginTop: 10,
  },

  button: {
    alignItems: "flex-end",
    marginTop: 40,
  },

  SignIn: {
    width: 150,
    height: 50,
    justifyContent: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15,
    fontWeight: "bold",
  },
});
