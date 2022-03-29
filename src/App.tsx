import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import styled from "styled-components";
import MainScreen from "./components/PrivateRoute";
import Flags from "./components/Flags";
import Environment from "./components/Environment";

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="ForgotPassword" element={<ForgotPassword />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="/" element={<MainScreen />}>
          <Route path="Home" element={<Home />} />
          <Route path="Projects" element={<h1>Projects</h1>} />
          <Route path="Flags/:Flag" element={<Flags />} />
          <Route path="Flags" element={<Flags />} />/
          <Route path="Enviroments" element={<Environment />} />
          <Route path="Application" element={<h1>Application</h1>} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
const AppWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;
