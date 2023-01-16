import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

const ProductDetails = ({ route, navigation }) => {
  const { productdetails } = route.params;

  return (
    <LinearGradient colors={["white", "white"]} style={styles.container}>
      <View style={styles.header}>
        <FlatList
          data={productdetails.imageurls}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <Image
                style={{ height: "100%", width: 500 }}
                source={{ uri: item }}
              />
            );
          }}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={require("../../../images/backArrow.png")} />
        </TouchableOpacity>
        <Text style={styles.title}>{productdetails.name}</Text>
        <Text
          style={{
            color: "gold",
            marginLeft: 300,
            fontSize: 20,
            marginTop: -28,
          }}
        >
          Rs. {productdetails.price}
        </Text>
        <Text style={styles.text}> Reviews:</Text>

        <Text style={{ color: "gold", marginLeft: 60, marginTop: -19 }}>
          {"  "}4.8
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 3, color: "white" }}>
          Description:
        </Text>
        <Text style={styles.text}>{productdetails.discription}</Text>

        <View style={styles.button}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#606A6D", "#14FC9B"]}
              style={styles.SignIn}
            >
              <Text style={styles.textSign}>Buy Now</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    alignSelf: "flex-start",
    top: "-150%",
    left: "5%",
  },
  footer: {
    height: 400,
    backgroundColor: "#292929",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginTop: -25,
  },

  logo: {
    width: 230,
    height: 290,
  },

  title: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
  },

  text: {
    color: "grey",
    marginTop: 10,
  },

  button: {
    alignItems: "flex-end",
    marginTop: 70,
  },

  SignIn: {
    width: 350,
    height: 50,
    justifyContent: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontSize: 16,
    marginTop: 15,
    fontWeight: "bold",
  },
});
