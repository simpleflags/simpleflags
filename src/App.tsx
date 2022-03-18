import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Acc from "./components/SignUp/index";
import feature from "./components/img/feature.png";
import ForgotPassword from "./components/ForgotPassword";
import styled from "styled-components";

function App() {

  return (
    <AppLogo>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      </AppLogo>

  );
}
const AppLogo = styled.div`
text-align: center;
`
export default App;
