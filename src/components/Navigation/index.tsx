import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Navbar, ScrollArea } from "@mantine/core";

function Navigation() {
  const navigate = useNavigate();
  const [color, setColor] = useState<any[]>([]);
  const [gender, setGender] = React.useState();
  const handleChange = (e: any) => {
    const target = e.target;
    if (target.checked) {
      setGender(target.value);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <Nav>
      <NavLogo>Simple Flags</NavLogo>
      <Text
        onChange={handleChange}
        onClick={() => {
          navigate("/Projects");
          setColor(["#0278d5"]);
        }}
        style={{
          backgroundColor: color.includes("#0278d5") ? "#0278d5" : "",
          width: "95px",
        }}
      >
        Project
      </Text>
      <Text
        onChange={handleChange}
        onClick={() => {
          navigate("/Flags");
          setColor(["flags"]);
        }}
        style={{
          backgroundColor: color.includes("flags") ? "#0278d5" : "",
          width: "80px",
        }}
      >
        Flags
      </Text>
      <Text
        onClick={() => {
          navigate("/Enviroments");
          setColor(["enviroments"]);
        }}
        style={{
          backgroundColor: color.includes("enviroments") ? "#0278d5" : "",
          width: "140px",
        }}
      >
        Enviroments
      </Text>
      <Text
        onClick={() => {
          navigate("/Application");
          setColor(["application"]);
        }}
        style={{
          backgroundColor: color.includes("application") ? "#0278d5" : "",
          width: "130px",
        }}
      >
        Application
      </Text>
    </Nav>
  );
}

const Nav = styled.div`
  flex-direction: column;
  color: white;
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
  color: white;
  padding-bottom: 40px;
  padding-top: 15px;
  margin-top: 20px;
  width: 100%;
`;

const Text = styled.div`
  width: 50px;
  padding: 5px 20px 10px;
  margin-bottom: 15px;
  cursor: pointer;
  border-radius: 12px;
  padding-left: 5px;
`;

export default Navigation;
