import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Acc from "./components/SignUp/index";
import feature from "./components/img/feature.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="App"
      style={{
        height: "90vh",
        width: "100%",
        backgroundImage: `url(${feature})`,
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
