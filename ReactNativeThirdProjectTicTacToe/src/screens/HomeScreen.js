import { StyleSheet, Text, View } from "react-native";

import Board from "../components/Board";
import React from "react";

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.gameTitle}>
        <Text style={styles.h1}>Tic Tac Toe</Text>
      </View>
      <Board />
    </View>
  );
};

const styles = StyleSheet.create({
  h1: { fontSize: 30 },
  gameTitle: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
