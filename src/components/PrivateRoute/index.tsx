import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../Navigation";
import feature from "../img/feature.png";

function PrivateRoute() {
  return (
    <>
      <Navigation />
      <div>
        <Projects>
          Projects
          <One>
            All Feature Flags
            <p>This page shows all the future flags for the project.</p>
            <p>
              Click on a flag name to a view or change targeting and rollout
              rulles.
            </p>
          </One>
        </Projects>
        <Outlet />
      </div>
    </>
  );
}

const Projects = styled.div`
  text-decoration: none;
  background-color: #0278d5;
  height: 15vh;
  width: 180vh;
  background-size: contain;
  /* background: url(${feature}); */
`;

const One = styled.div`
  font-size: 15px;
  color: white;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default PrivateRoute;
