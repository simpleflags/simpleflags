import React from "react";
import styled from "styled-components";

function Sign() {
  return <SignIn>Sign in</SignIn>;
}
const SignIn = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: 30px;
  padding: 20px;
`;
export default Sign;
