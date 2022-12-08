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
import Icon from "@expo/vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "./components/context";
import { StatusBar } from "expo-status-bar";
import Users from "./modal/users";
import { ScrollView } from "react-native-gesture-handler";
const SignIn = ({ navigation }) => {
  const [data, setData] = React.useState({
    userName: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const { signIn } = React.useContext(AuthContext);
  const textInputChange = (value) => {
    if (value.length >= 4) {
      setData({
        ...data,
        userName: value,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        userName: value,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };
  const handlePasswordChange = (value) => {
    if (value.length >= 8) {
      setData({
        ...data,
        password: value,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: value,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const loginHandle = (userName, password) => {
    const foundUser = Users.filter((item) => {
      return userName == item.username && password == item.password;
    });
    if (data.userName.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or Password field cannot be empty",
        [{ text: "Okay" }]
      );
      return;
    }
    if (foundUser.length == 0) {
      Alert.alert("Invalid User!", "Username or Password is incorrect.", [
        { text: "Okay" },
      ]);
      return;
    }
    signIn(foundUser);
  };
  return (
    <ScrollView>
      <LinearGradient colors={["#052A37", "#12DFEB"]} style={styles.container}>
        <StatusBar />
        <View style={styles.header}>
          <Animatable.View animation="fadeIn" duration={2000}>
            <Image
              style={{
                tintColor: "white",
                marginLeft: 90,
                marginTop: 50,
                width: 200,
                height: 200,
              }}
              source={require("./images/loginpage.png")}
            />
          </Animatable.View>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_header}>Login</Text>

          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <Icon color="grey" name="person-outline" size={25} />
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={(value) => textInputChange(value)}
              onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
            />
            {data.check_textInputChange ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : null}
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username must be 4 characters long.
              </Text>
            </Animatable.View>
          )}

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
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.SignIn}
              onPress={() => {
                loginHandle(data.userName, data.password);
              }}
            >
              <LinearGradient style={styles.SignIn} colors={["grey", "teal"]}>
                <Text style={styles.textSign}>SignIn</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.SignIn,
                { borderColor: "grey", borderWidth: 1, marginTop: 15 },
              ]}
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text style={[styles.textSign, { color: "teal" }]}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </LinearGradient>
    </ScrollView>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  header: {
    height: 250,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    marginTop: 70,
  },
  footer: {
    height: 550,
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
  errorMsg: {
    color: "red",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
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
