import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Select, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import Flag from "../Flag";

function Flags() {
  const navigate = useNavigate();
  const [arrayFlags, setArrayFlags] = useState<string[]>([]);
  const [searchFlag, setSearchFlag] = useState<any>();

  const form = useForm({
    initialValues: {
      name: "",
      termsOfService: false,
    },
    validate: {
      name: (value) => (value.length ? null : "Invalid name"),
    },
  });
  useEffect(() => {
    if (searchFlag) {
      navigate({ pathname: `/Flags/${searchFlag}` });
    }
  }, [searchFlag]);

  return (
    <>
      <WrapperFlags>
        <ChooseSearch>
          <p>Choose employee </p>
          <Select
            placeholder="Pick one"
            data={arrayFlags}
            onChange={(e) => {
              setSearchFlag(() => {
                return arrayFlags.find((el) => {
                  return el === e;
                });
              });
            }}
            searchable
            maxDropdownHeight={400}
            nothingFound="Nobody here"
          />
        </ChooseSearch>
        <>
          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            onClick={() => setSearchFlag(true)}
          >
            + Add Flag
          </Button>
        </>
      </WrapperFlags>
      <Background>{searchFlag && <Flag flag={searchFlag} />}</Background>
    </>
  );
}
const ChooseSearch = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 300px;
`;
const WrapperFlags = styled.div`
  color: ${(props) => props.theme.colors.black};;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colors.lightSilver};
  border-bottom: 1px solid ${(props) => props.theme.colors.lightSilver};
  padding: 10px 15px;
  background-color: ${(props) => props.theme.colors.aliceBlue};
`;

const SearchIcon = styled.div`
  padding: 10px 15px;
  padding-right: 30px;
`;
const Icon = styled.div`
  position: absolute;
  width: 30px;
  height: 32px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin: 0 !important;
  pointer-events: none;
`;

const Background = styled.div`
  height: 74.1%;
  padding: 1px;
  background-color: ${(props) => props.theme.colors.aliceBlue};
  justify-content: space-around;
  flex-direction: row;
`;

const FF = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.aliceBlue};
  padding: 10px;
  justify-content: space-around;
`;

const StyleButtonModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  padding-top: 50px;
`;
const Create = styled.div`
  text-align: center;
  padding: 20px;
  padding-top: 50px;
  color: ${(props) => props.theme.colors.white};
`;

const AboutFlag = styled.div`
  color: ${(props) => props.theme.colors.white};
  padding-bottom: 20px;
  text-align: center;
`;

const Description = styled.div`
  color: ${(props) => props.theme.colors.white};
  padding-top: 20px;
`;
export default Flags;
