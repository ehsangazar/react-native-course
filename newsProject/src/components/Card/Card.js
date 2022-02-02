import { Alert, Linking, TouchableOpacity } from "react-native";

import React from "react";
import styled from "styled-components/native";

const StyledView = styled.View`
  flex-direction: row;
  border-width: 1px;
  padding: 8px;
  margin: 8px;
  border-color: ${({ theme }) => theme.colors.gray.medium};
  border-radius: 15px;
`;
const StyledCardTitleText = styled.Text`
  font-size: ${({ theme }) => theme.typography.heading2.fontSize};
  font-family: ${({ theme }) => theme.typography.heading2.fontFamily};
  padding: 8px;
  flex: 1;
  color: ${({ theme }) => theme.textColor};
`;
const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const Card = ({ data }) => {
  const onPress = () => {
    Alert.alert(
      "Are you sure you want to leave the app?",
      "Your app will be in the background",
      [
        {
          text: "NO",
          onPress: () => console.log("No was Pressed"),
          style: "NO",
        },
        { text: "YES", onPress: () => Linking.openURL(data.url) },
      ]
    );
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledView>
        <StyledImage
          source={{
            uri: data.urlToImage,
          }}
        />
        <StyledCardTitleText>{data.title}</StyledCardTitleText>
      </StyledView>
    </TouchableOpacity>
  );
};

export default Card;
