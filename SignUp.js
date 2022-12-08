import React from "react";
import axios from "axios";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollResponderEvent,
  ScrollView,
  ScrollViewComponent,
  Image,
  useState,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@expo/vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import Feather from "@expo/vector-icons/Feather";

import { StatusBar } from "expo-status-bar";
import UserAuth from "./src/api/UserAuth";

const SignUp = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    confirm_password: "",
    Contact: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  async function loginApi(name, email, password, cPassword) {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5500/"
        // {
        //   name,
        //   email,
        //   password,
        //   cPassword,
        // }
      );
      console.log("response", response);
      return response;
    } catch (err) {
      console.log("ERROROOROR", err);
      // setErrorMessage("Something went Wrong");
    }
  }

  const signUp = async () => {
    const status = await loginApi(
      "abc",
      data.email,
      data.password,
      data.confirm_password
    );
    console.log("staus", status);
  };

  const textInputChange = (value) => {
    if (value.length !== 0) {
      setData({
        ...data,
        email: value,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        check_textInputChange: false,
      });
    }
  };
  const handlePasswordChange = (value) => {
    setData({
      ...data,
      password: value,
    });
  };

  const handleConfirmPasswordChange = (value) => {
    setData({
      ...data,
      confirm_password: value,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  const ContactChange = (value) => {
    setData({
      ...data,
      Contact: value,
    });
  };
  return (
    <ScrollView>
      <LinearGradient colors={["#052A37", "#12DFEB"]} style={styles.container}>
        <StatusBar />
        <Animatable.View animation="fadeIn" duration={2000}>
          <Image
            style={{
              tintColor: "white",
              marginLeft: 120,
              marginTop: 50,
              width: 150,
              height: 150,
            }}
            source={require("./images/add-user.png")}
          />
        </Animatable.View>
        <View style={styles.header} />
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_header}>SignUp </Text>

          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <Icon color="grey" name="person-outline" size={25} />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={(value) => textInputChange(value)}
            />
            {data.check_textInputChange ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : null}
          </View>
          <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>

          <View style={styles.action}>
            <Icon color="grey" name="lock-outline" size={25} />
            <TextInput
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              placeholder="Password"
              autoCapitalize="none"
              onChangeText={(value) => handlePasswordChange(value)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={[styles.text_footer, { marginTop: 20 }]}>
            Confirm Password
          </Text>

          <View style={styles.action}>
            <Icon color="grey" name="lock-outline" size={25} />
            <TextInput
              style={styles.textInput}
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              placeholder="Confirm Your Password"
              autoCapitalize="none"
              onChangeText={(value) => handleConfirmPasswordChange(value)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={[styles.text_footer, { marginTop: 20 }]}>Contact </Text>
          <View style={styles.action}>
            <Icon color="grey" name="phone" size={25} />
            <TextInput
              style={styles.textInput}
              placeholder="Contact No"
              autoCapitalize="none"
              onChangeText={(value) => ContactChange(value)}
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity onPress={signUp}>
              <LinearGradient style={styles.SignIn} colors={["grey", "teal"]}>
                <Text style={styles.textSign}>SignUp</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.SignIn,
                { borderColor: "grey", borderWidth: 1, marginTop: 15 },
              ]}
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <Text style={[styles.textSign, { color: "teal" }]}>SignIn</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </LinearGradient>
    </ScrollView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  header: {
    height: 50,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 1,
    height: 580,
    resizeMode: "cover",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  text_header: {
    color: "teal",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 25,
  },
  text_footer: {
    color: "grey",
    fontSize: 15,
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
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.os === "ios" ? 0 : -4,
    paddingLeft: 10,
    color: "grey",
  },
  button: {
    alignItems: "center",
    marginTop: 20,
  },

  SignIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
