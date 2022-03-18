import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function Home() {
  const navigate = useNavigate()
  return <Wrapper>
  <Nav> 
    <NavLogo>Simple Flags</NavLogo>
    <Text onClick={() => navigate("/AllProjects")}>Project</Text>
    <Text>Flags</Text>
    <Text>Enviroments</Text>
    <Text>Application</Text>
  </Nav>

  <All>
  <Projects>
  Projects
    <One>
      All Feature Flags
    <p>This page shows all the future flags for the project.</p>
    <p>Click on a flag name to a view or change targeting and rollout rulles.
    </p>
    </One>
    </Projects>
    <AllProjects>
        Project 1
    </AllProjects>
  </All>
  </Wrapper>;
}
const Wrapper = styled.div`
  font-size: 30px;
  display: flex;
  text-decoration: none;
  height: 100%;
  width: 100%;
  `;

const Nav = styled.div`
flex-direction: column;
overflow-y: scroll;
color: #cbd5e0;
width: 220px;
background-color: #1a202c;
font-size: 20px;
padding-left: 10px;
padding-right: 10px;
padding-top: 20px;
height: 100vh;
`
const NavLogo = styled.div`
color: white;
padding-bottom: 40px;
padding-top: 15px;
margin-top: 20px;
width: 100%;
`

const Text = styled.div`
padding-right: 30px;
width: 50px;
padding: 10px;
margin-bottom: 15px;
`

const Projects = styled.div`
text-decoration: none;
background-color:#DEB887;
height: 20vh;
width: 169vh;
` 

const AllProjects = styled.div`
color: white;
background-color: gray;
height: 82.2vh;
width: 100%;
` 

const One = styled.div`
font-size: 15px;
color: white;
padding-top: 30px;`

const All = styled.div`
display:grid;
`

export default Home;
