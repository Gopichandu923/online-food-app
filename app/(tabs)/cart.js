import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const cart = () => {
  const user = false;
  const router = useRouter();
  const handleLoginButton = () => {
    router.push("/login");
  };
  return (
    <View>
      {user ? (
        <Text>cart</Text>
      ) : (
        <Button title="Login" onPress={handleLoginButton} />
      )}
    </View>
  );
};

export default cart;
