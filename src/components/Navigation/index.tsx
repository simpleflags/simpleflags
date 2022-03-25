import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Navbar, ScrollArea } from "@mantine/core";
import { myTheme } from "../../style/theme";

function Navigation() {
  const navigate = useNavigate();
  const [color, setColor] = useState<string[]>([]);
  const [gender, setGender] = React.useState();
  const handleChange = (e: any) => {
    const target = e.target;
    if (target.checked) {
      setGender(target.value);
    }
  };
  return (
    <Nav>
      <NavLogo>Simple Flags</NavLogo>
      <Text
        onChange={handleChange}
        onClick={() => {
          navigate("/Projects");
          setColor([myTheme.colors.lightBlue]);
        }}
        backgroundColor={
          color.includes(myTheme.colors.lightBlue)
            ? myTheme.colors.lightBlue
            : ""
        }
      >
        Project
      </Text>
      <Text
        onChange={handleChange}
        onClick={() => {
          navigate("/Flags");
          setColor(["flags"]);
        }}
        backgroundColor={
          color.includes("flags") ? myTheme.colors.lightBlue : ""
        }
      >
        Flags
      </Text>
      <Text
        onClick={() => {
          navigate("/Enviroments");
          setColor(["enviroments"]);
        }}
        backgroundColor={
          color.includes("enviroments") ? myTheme.colors.lightBlue : ""
        }
      >
        Enviroments
      </Text>
      <Text
        onClick={() => {
          navigate("/Application");
          setColor(["application"]);
        }}
        backgroundColor={
          color.includes("application") ? myTheme.colors.lightBlue : ""
        }
      >
        Application
      </Text>
    </Nav>
  );
}
const Nav = styled.div`
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
  width: 400px;
  background-color: #1a202c;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const NavLogo = styled.div`
  color: ${(props) => props.theme.colors.white};
  padding-bottom: 40px;
  padding-top: 15px;
  margin-top: 20px;
  width: 100%;
`;

const Text = styled.div<{ backgroundColor: string }>`
  padding: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  border-radius: 12px;
  background: ${(props) => props.backgroundColor};
`;

export default Navigation;
