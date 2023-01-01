import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import ProductCard from "./ProductCard";
import wandererApi from "../../api/Wanderer";
import SearchBar from "../../Components/SearchBar";

const Products = ({ navigation }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    apicall();
  }, []);

  const apicall = async () => {
    try {
      const response = await wandererApi.get("/api/products/getallproducts");
      setProductData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View style={{ height: "30%" }}>
        <View
          style={{
            backgroundColor: "#292929",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../images/backArrow.png")}
              style={{ marginTop: 60, width: 20, tintColor: "white" }}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 70,
              alignContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 28,
                color: "#FFF",
                fontWeight: "bold",
                marginLeft: 10,
                marginTop: 0,
              }}
            >
              Get ready for your trip.
            </Text>

            <Image
              source={require("../../../images/w2.jpg")}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                marginLeft: 50,
                marginTop: -20,
              }}
            />
          </View>
        </View>
        <SearchBar />
      </View>
      {productData && (
        <FlatList
          data={productData}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return <ProductCard product={item} />;
          }}
        />
      )}
    </>
  );
};
export default Products;
