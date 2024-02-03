import React from "react";
import styled from "styled-components";
import ToggleSwitch from "../ToggleSwitch";

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppName = styled.h1`
  margin: 0;
`;

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <HeaderContainer>
      <AppName>Your App Name</AppName>
      <ToggleSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </HeaderContainer>
  );
}
