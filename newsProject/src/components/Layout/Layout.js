import { AntDesign, Feather } from "@expo/vector-icons";

import React from "react";
import styled from "styled-components/native";

const Layout = ({ navigation, children }) => {
  const onPressHomeButton = () => {
    navigation.navigate("Home");
  };
  const onPressAboutButton = () => {
    navigation.navigate("About");
  };
  const onPressContactButton = () => {
    navigation.navigate("Contact");
  };
  return (
    <StyledView>
      <StyledHeaderView>
        <StyledText>News App</StyledText>
      </StyledHeaderView>
      {children}
      <StyledFooterView>
        <StyledTouchableOpacityFooterIcon onPress={onPressHomeButton}>
          <AntDesign name="home" size={24} color="white" />
        </StyledTouchableOpacityFooterIcon>
        <StyledTouchableOpacityFooterIcon onPress={onPressAboutButton}>
          <Feather name="smile" size={24} color="white" />
        </StyledTouchableOpacityFooterIcon>
        <StyledTouchableOpacityFooterIcon onPress={onPressContactButton}>
          <AntDesign name="contacts" size={24} color="white" />
        </StyledTouchableOpacityFooterIcon>
      </StyledFooterView>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex: 1;
  width: 100%;
`;
const StyledHeaderView = styled.View`
  justify-content: flex-start;
  width: 100%;
  padding: 15px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
`;
const StyledFooterView = styled.View`
  position: absolute;
  bottom: 0;
  justify-content: flex-start;
  width: 100%;
  padding: 15px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
const StyledText = styled.Text`
  font-size: ${({ theme }) => theme.typography.heading1.fontSize};
  font-family: ${({ theme }) => theme.typography.heading1.fontFamily};
`;
const StyledTouchableOpacityFooterIcon = styled.TouchableOpacity`
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export default Layout;
