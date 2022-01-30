import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const Square = ({ squareNumber, onPress, value }) => {
  const handleOnPress = () => {
    onPress(squareNumber);
  };
  return (
    <TouchableOpacity style={styles.touchableArea} onPress={handleOnPress}>
      <View style={styles.squareStyle}>
        <Text style={styles.textStyle}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  squareStyle: {
    height: 100,
    width: 100,
    backgroundColor: "#eeeeee",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 50,
  },
  touchableArea: {},
});

export default Square;
