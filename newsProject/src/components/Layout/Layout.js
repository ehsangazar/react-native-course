import React from "react";
import styled from "styled-components/native";

const Layout = ({ children }) => {
  return (
    <StyledView>
      <StyledHeaderView>
        <StyledText>News App</StyledText>
      </StyledHeaderView>
      {children}
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
const StyledText = styled.Text`
  font-size: ${({ theme }) => theme.typography.heading1.fontSize};
  font-family: ${({ theme }) => theme.typography.heading1.fontFamily};
`;

export default Layout;
