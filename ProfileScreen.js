import React from "react";

import { View, Text, Button } from "react-native";

const ProfileScreen = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="Click" onPress={() => alert("button clicked")} />
    </View>
  );
};

export default ProfileScreen;
