import { Button, SegmentedControl, TextInput } from "@mantine/core";
import React, { useState } from "react";
import styled from "styled-components";
import EnvironmentFlag from "./Production";
import NonProduction from "./NonProduction";
import Production from "./Production";

export enum EnvironmentType {
  Production = "Production",
  NonProduction = "NonProduction",
}

function Environment() {
  const [environmentType, setEnvironmentType] = useState<EnvironmentType>();
  console.log(environmentType);
  return (
    <Wrapper>
      <CreateEnvironment>Create an Environment</CreateEnvironment>
      <NameEnvironment>
        <ul>
          <li>
            <TextInput placeholder="Name of your Environment:" />
          </li>
          <li>
            <TextInput placeholder="Identify:" />
          </li>
          <li>
            {/* <EnvironmentType> Environment type</EnvironmentType> */}
            <SegmentControlStyle>
              Environment type:
              <SegmentedControl
                onChange={(e) => setEnvironmentType(e as EnvironmentType)}
                data={[
                  { label: "Production", value: EnvironmentType.Production },
                  {
                    label: "Non-Production",
                    value: EnvironmentType.NonProduction,
                  },
                ]}
              />
            </SegmentControlStyle>
          </li>
        </ul>
        {/* <Button
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          onClick={() => setEnvironmentType(true)}
        >
          Save
        </Button> */}
      </NameEnvironment>
      {/* <div>Identify</div>
      <div>
       
        <div>
        PROD
        <div>SDK KEYS</div>
        <div>Secrets are only visible right after creation and redacted once you leave the page. Please make sure to copy and store your secret somewhere safe</div>
      <div>NAME</div>
      <div>TYPE</div>
      <button>Add Key</button>
      <p>js-sdk</p>
      <p>Client</p>
      <p>Secret:XXXXXXXXXXXXXXXXXXXXXxx</p>
      <div>DELETE</div>
      </div>
      </div>
     </div> */}
      <Background>
        {environmentType === EnvironmentType.Production ? (
          <Production EnvironmentFlag={""} />
        ) : (
          <NonProduction NonProductionFlag={""} />
        )}
      </Background>
    </Wrapper>
  );
}
const Background = styled.div`
  height: 74.1%;
  padding: 1px;
  background-color: ${(props) => props.theme.colors.aliceBlue};
  justify-content: space-around;
  flex-direction: row;
`;
const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.aliceBlue};
`;
const CreateEnvironment = styled.div`
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  font-size: 20px;
  padding-left: 50px;
  border-bottom: 0.5px solid ${(props) => props.theme.colors.lightSilver};
`;
const NameEnvironment = styled.div`
  font-size: 18px;
  border-bottom: 0.5px solid ${(props) => props.theme.colors.lightSilver};

  text-align: left;
  ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }
  li,
  input {
    border: none;
    background-color: ${(props) => props.theme.colors.aliceBlue};
    font-size: 16px;
  }
  li:nth-child(1) {
    border-bottom: 1px solid ${(props) => props.theme.colors.lightBlue};
    width: 200px;
  }
  li:nth-child(2) {
    border-bottom: 1px solid ${(props) => props.theme.colors.lightBlue};
    width: 200px;
  }
  li:nth-child(3) {
    /* width: 400px; */
    /* display: flex; */
    /* gap: 30px; */
    padding-left: 30px;
  }

  ul li::before {
    color: ${(props) => props.theme.colors.lightBlue};
  }
`;
// const EnvironmentType = styled.div`
//   margin-right: 30px;
//   text-align: center;
// `;
const SegmentControlStyle = styled.div`
  display: flex;
  gap: 30px;
  text-align: center;
`;
export default Environment;
