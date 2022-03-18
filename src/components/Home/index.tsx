import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <All>
        <AllProjects>
          <p>Projects</p>
          <ProjectText>Project 1</ProjectText>
        </AllProjects>
      </All>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-size: 30px;
  display: flex;
  text-decoration: none;
  /* height: 100%; */
  /* width: 100%; */
`;

const AllProjects = styled.div`
  color: black;
  background-color: gray;
`;
const ProjectText = styled.div`
  color: black;
  float: left;
  padding-top: 30px;
  margin-left: 30px;
`;

const All = styled.div`
  display: grid;
  height: 82.1vh;
  width: 180vh;
`;

export default Home;
