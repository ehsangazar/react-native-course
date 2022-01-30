import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerNumber, setPlayerNumber] = useState(1);
  const [winner, setWinner] = useState(null);

  const validateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    lines.forEach((line) => {
      if (
        squares[line[0]] !== null &&
        squares[line[0]] === squares[line[1]] &&
        squares[line[0]] === squares[line[2]]
      ) {
        setWinner(squares[line[0]]);
      }
    });
  };

  const handlePress = (squareNumber) => {
    if (squares[squareNumber - 1] === null) {
      const newSquares = [...squares];
      newSquares[squareNumber - 1] = playerNumber === 1 ? "X" : "O";
      setSquares(newSquares);
      setPlayerNumber(playerNumber === 1 ? 2 : 1);
    }
  };

  const onPressResetButton = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
  };

  useEffect(() => {
    validateWinner();
  }, [squares]);

  const onModalClose = () => {
    setWinner(null);
  };

  const onPressNewGame = () => {
    onModalClose();
    onPressResetButton();
  };

  return (
    <View style={styles.boardContainerStyle}>
      {winner && (
        <Text style={styles.messageStyle}>{winner} is the winner</Text>
      )}
      <View style={styles.boardStyle}>
        {squares.map((item, index) => (
          <Square squareNumber={index + 1} onPress={handlePress} value={item} />
        ))}
      </View>
      <View style={styles.resetButton}>
        <Button
          onPress={onPressResetButton}
          title="Reset"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={winner !== null}
        onRequestClose={onModalClose}
      >
        <View style={styles.modalViewContainer}>
          <View style={styles.modalView}>
            <Text style={styles.messageStyle}>{winner} is the winner</Text>
            <Pressable
              onPress={onPressNewGame}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "rgb(210, 230, 255)" : "blue",
                },
                styles.customButton,
              ]}
            >
              {({ pressed }) => (
                <Text style={{ color: pressed ? "black" : "white" }}>
                  Start New Game
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  boardContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  messageStyle: {
    fontSize: 20,
  },
  boardStyle: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  resetButton: {
    marginTop: 50,
    color: "white",
    width: 100,
  },
  modalViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  customButton: {
    marginTop: 10,
    padding: 10,
  },
});

export default Board;
