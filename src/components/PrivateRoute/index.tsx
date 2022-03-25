import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../Navigation";
import img from "../img/img-1.jpg";

function PrivateRoute() {
  return (
    <>
      <Navigation />
      <div>
        <Projects>
          All Feature Flags
          <One>
            <p>This page shows all the future flags for the project.</p>
          </One>
        </Projects>
        <Outlet />
      </div>
    </>
  );
}

const Projects = styled.div`
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.lightBlue};
  color: ${(props) => props.theme.colors.white};
  height: 15vh;
  width: 180vh;
  background-size: contain;
  padding-top: 20px;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  font-size: 20px;
`;

const One = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default PrivateRoute;
