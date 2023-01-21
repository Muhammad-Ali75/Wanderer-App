import React, { useContext } from "react";

import { View, StyleSheet } from "react-native";
import { Avatar, Title, Drawer, Caption, Paragraph } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Context as AuthContext } from "../../Context/AuthContext";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export function DrawerContent(props) {
  const { state, signout } = useContext(AuthContext);
  const user = JSON.parse(state.token);
  return (
    <LinearGradient colors={["#FBF8F8", "teal"]} style={styles.LinearGradient}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri:
                    "https://secure.gravatar.com/avatar/379c085d096680aec5f3eb733a942847",
                }}
              />
              <View style={{ flexDirection: "column", marginLeft: 15 }}>
                <Title style={styles.title}>{user.name}</Title>
                <Caption style={styles.caption}>{user.email}</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={(styles.paragraph, styles.caption)}>
                  Hotel
                </Paragraph>
                <Caption style={styles.caption}> Avari Hotel</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={(styles.paragraph, styles.caption)}>
                  Rooms
                </Paragraph>
                <Caption style={styles.caption}> 1 </Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color }) => (
                <MaterialIcons name="tour" size={24} color={color} />
              )}
              label="My Tour Bookings"
              onPress={() => {
                props.navigation.navigate("MyTours");
              }}
            />
            <DrawerItem
              icon={({ color }) => (
                <FontAwesome5 name="hotel" size={17} color={color} />
              )}
              label="My Hotel Bookings"
              onPress={() => {
                props.navigation.navigate("MyHotels");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5 name="shopping-bag" size={19} color={color} />
              )}
              label="My Product Bookings"
              onPress={() => {
                props.navigation.navigate("MyProducts");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={async () => {
            await signout();
          }}
        />
      </Drawer.Section>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  LinearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",

    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "rgba(41,41,41, 0.3)",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  switch: {
    marginTop: -15,
  },
});
