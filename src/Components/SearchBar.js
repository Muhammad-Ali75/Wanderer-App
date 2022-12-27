import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#b1e5d3"
        style={styles.input}
      />
      <FontAwesome name="search" size={24} color="teal" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    backgroundColor: "#FFF",
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: -20,
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 500,
  },
  input: {
    color: "teal",
    fontWeight: "bold",
    fontSize: 18,
    width: "85%",
  },
  icon: {
    marginLeft: 20,
    marginTop: -3,
  },
});

export default SearchBar;
