import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function Login() {
  return (
    <ScrollView>
      <View>
        <View style={styles.text}>
          <Text>Login</Text>
        </View>

        <Image
          style={styles.image}
          source={require("../assets/images/adaptive-icon.png")}
        ></Image>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    height: 30,
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 300,
  },
});
