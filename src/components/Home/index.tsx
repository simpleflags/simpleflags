import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      Home Page <br />
      login - /login
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-size: 30px;
  display: flex;
  text-decoration: none;
`;

const AllProjects = styled.div`
  color: ${(props) => props.theme.colors.black};
  background-color: gray;
`;
const ProjectText = styled.div`
  color: ${(props) => props.theme.colors.black};
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
