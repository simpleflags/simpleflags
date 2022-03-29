import React from "react";
import styled from "styled-components";

function Production(props: { EnvironmentFlag: string }) {
  return (
    <Wrapper>
      PRODUCTION
      <Prod>
        <p>prod</p>
        <p>id: prod</p>
      </Prod>
      <SDK>
        <p>SDK Keys</p>
        <p>
          Secrets are only visible right after creation and redacted once you
          leave the page. Please make sure to copy and store your secret
          somewhere safe
        </p>
      </SDK>
      <div>
        <NameofType>
          <p>Name</p>
          <p>Type</p>
        </NameofType>
        <InputText>
          <p>js-sdk</p>
          <p>Client</p>
          <p>Secret: xxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>Delete</p>
        </InputText>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.aliceBlue};
  height: 69vh;
`;
const Prod = styled.div`
  text-align: left;
  border: 1px solid black;
`;

const SDK = styled.div`
  text-align: left;
`;
const NameofType = styled.div`
  text-align: left;
  display: flex;
  gap: 30px;
`;
const InputText = styled.div`
  display: flex;
  justify-content: space-around;
`;
export default Production;
