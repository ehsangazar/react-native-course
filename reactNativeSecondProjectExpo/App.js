import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const onPressLearnMore = () => {
    console.log("debug onPressLearnMore");
  };
  return (
    <View style={styles.container}>
      <Text>Ehsan Gazar</Text>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
