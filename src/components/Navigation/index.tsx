import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
  const navigate = useNavigate();

  return (
    <Nav>
      <NavLogo>Simple Flags</NavLogo>
      <Text onClick={() => navigate("/Projects")}>Project</Text>
      <Text onClick={() => navigate("/Flags")}>Flags</Text>
      <Text onClick={() => navigate("/Enviroments")}>Enviroments</Text>
      <Text onClick={() => navigate("/Application")}>Application</Text>
    </Nav>
  );
}

const Nav = styled.div`
  flex-direction: column;
  color: #cbd5e0;
  width: 220px;
  background-color: #1a202c;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  height: 100vh;
`;

const NavLogo = styled.div`
  color: white;
  padding-bottom: 40px;
  padding-top: 15px;
  margin-top: 20px;
  width: 100%;
`;

const Text = styled.div`
  padding-right: 30px;
  width: 50px;
  padding: 10px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export default Navigation;
