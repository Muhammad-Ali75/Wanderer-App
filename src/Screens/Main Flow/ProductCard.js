import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProdutDetails", { productdetails: product })
      }
      style={styles.card}
    >
      <Image style={styles.image} source={{ uri: product.imageurls[0] }} />

      <View style={styles.info}>
        <View style={{ flex: 3 }}>
          <Text style={styles.nameText} ellipsizeMode="tail" numberOfLines={2}>
            {product.name}
          </Text>
        </View>

        <View style={styles.right}>
          <Text style={{ color: "#F4A40E", fontSize: 20 }}>
            Rs.{product.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
  },
  price: {
    fontWeight: "bold",
    color: "#00a46c",
    paddingRight: 20,
  },
  card: {
    borderRadius: 20,
    backgroundColor: "white",
    margin: 10,
    height: 400,
    elevation: 3,
  },
  image: {
    margin: 30,
    borderRadius: 10,
    height: 250,
    width: "88%",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
    marginTop: -20,
  },
  nameText: {
    fontSize: 25,
    color: "black",
    maxWidth: "80%",
  },
  button: {
    alignItems: "center",
    marginTop: -20,
  },
  gradient: {
    width: 200,
    height: 45,
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 16,
    marginTop: 13,
    fontWeight: "bold",
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 10,
  },
});

export default ProductCard;
