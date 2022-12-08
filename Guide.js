import React from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  useState,
  Image,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import Swiper from "react-native-swiper";

import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";
const Guide = ({ navigation }) => {
  return (
    <ScrollView>
      <LinearGradient colors={["#052A37", "#12DFEB"]} style={styles.container}>
        <StatusBar />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{
              marginTop: 50,
              marginLeft: 20,
              tintColor: "white",
              width: "4%",
              height: 10,
            }}
            source={require("./images/17.png")}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("./images/guide.png")}
          />
        </View>

        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>Guides</Text>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              placeholder="Search by city"
              autoCapitalize="none"
            />
          </View>
          <Swiper
            style={StyleSheet.wrapper}
            dotStyle={{
              marginTop: -100,
              width: 15,
              height: 5,
              borderRadius: 10,
              backgroundColor: "grey",
            }}
            activeDotColor="grey"
            activeDotStyle={{
              marginTop: -100,
              width: 30,
              height: 6,
              borderRadius: 10,
              backgroundColor: "grey",
              activeDotColor: "grey",
            }}
          >
            <View
              style={{
                borderWidth: 1,

                borderRadius: 20,
                marginTop: 10,
              }}
            >
              <View>
                <Image
                  style={{
                    width: 85,
                    height: 85,
                    borderRadius: 50,
                    marginTop: 10,
                    marginLeft: 150,
                  }}
                  source={require("./images/Ahsan.jpg")}
                />
                <Text style={styles.errorMsg}> Ahsan Rana </Text>
                <Text style={{ marginTop: 5, marginLeft: 130, color: "grey" }}>
                  {" "}
                  108 Mughalpura St{" "}
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 110, color: "grey" }}>
                  {" "}
                  ahsanrana108@gmail.com{" "}
                </Text>
              </View>
              <View style={styles.button}>
                <TouchableOpacity style={styles.SignIn}>
                  <LinearGradient
                    style={styles.SignIn}
                    colors={["grey", "teal"]}
                  >
                    <Text style={styles.textSign}>Contact</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 20,
                marginTop: 10,
              }}
            >
              <View>
                <Image
                  style={{
                    width: 85,
                    height: 85,
                    borderRadius: 50,
                    marginTop: 10,
                    marginLeft: 150,
                  }}
                  source={require("./images/mohsin.webp")}
                />
                <Text style={styles.errorMsg}> Mohsin Khalid </Text>
                <Text style={{ marginTop: 5, marginLeft: 130, color: "grey" }}>
                  {" "}
                  108 Mughalpura St{" "}
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 110, color: "grey" }}>
                  {" "}
                  ahsanrana108@gmail.com{" "}
                </Text>
              </View>
              <View style={styles.button}>
                <TouchableOpacity style={styles.SignIn}>
                  <LinearGradient
                    style={styles.SignIn}
                    colors={["grey", "teal"]}
                  >
                    <Text style={styles.textSign}>Contact</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ borderWidth: 1, borderRadius: 20, marginTop: 10 }}>
              <View>
                <Image
                  style={{
                    width: 85,
                    height: 85,
                    borderRadius: 50,
                    marginTop: 10,
                    marginLeft: 150,
                  }}
                  source={require("./images/ashar.jpg")}
                />
                <Text style={styles.errorMsg}> Ashar Chauhan </Text>
                <Text style={{ marginTop: 5, marginLeft: 130, color: "grey" }}>
                  {" "}
                  108 Mughalpura St{" "}
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 110, color: "grey" }}>
                  {" "}
                  ahsanrana108@gmail.com{" "}
                </Text>
              </View>
              <View style={styles.button}>
                <TouchableOpacity style={styles.SignIn}>
                  <LinearGradient
                    style={styles.SignIn}
                    colors={["grey", "teal"]}
                  >
                    <Text style={styles.textSign}>Contact</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </Swiper>
        </Animatable.View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Guide;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  header: {
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    height: 250,
    marginTop: 40,
  },
  footer: {
    height: 500,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  text_header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 150,
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
  action: {
    flexDirection: "row",
    marginTop: 10,

    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: 2,
    paddingLeft: 20,
    padding: 6,
    color: "grey",
    borderWidth: 1,
    borderRadius: 20,
  },
  errorMsg: {
    marginLeft: 140,
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    marginTop: 15,
    marginLeft: 15,
  },

  SignIn: {
    width: 90,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 10,
  },
  textSign: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
