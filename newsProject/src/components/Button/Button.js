import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const StyledView = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
  margin: 0 3px;
`;
const StyledText = styled.Text`
  color: white;
`;

const Button = ({ buttonText, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledView>
        <StyledText>{buttonText}</StyledText>
      </StyledView>
    </TouchableOpacity>
  );
};

export default Button;
