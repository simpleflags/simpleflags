import React, { useState } from "react";
import styled from "styled-components";
// import { NativeSelect } from "@mantine/core";
import { Select } from "@mantine/core";
import { Switch } from "@mantine/core";
import { Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
// import { ChevronDown } from "tabler-icons-react";

function Flags() {
  const [arrayFlags, setArrayFlags] = useState<string[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenBoolean, setIsOpenBoolean] = useState(false);
  const [isOpenMultivariate, setIsOpenMultivariate] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
      termsOfService: false,
    },

    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    // },
  });
  return (
    <>
      <WrapperFlags>
        Feature Flags
        <>
          {/* <NativeSelect
            label="Your favorite library/framework"
            placeholder="Your favorite library/framework"
            data={["Prod", "Dev"]}
            rightSection={<ChevronDown size={14} />}
            rightSectionWidth={40}
          /> */}
          <Select
            label="Your favorite framework/library"
            placeholder="Pick one"
            data={[
              { value: "prod", label: "Prod" },
              { value: "dev", label: "Dev" },
            ]}
          />
        </>
      </WrapperFlags>
      <WrapperButton>
        <Modal
          opened={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          withCloseButton={false}
        >
          Select the Type of Flag You Want to Create
          {/* <i
            className="fas fa-viruses"
            style={{ color: "black", fontSize: 25 }}
          ></i>{" "} */}
          <p>
            <Button
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              onClick={() => {
                setIsOpenBoolean(true);
                setIsOpenModal(false);
              }}
            >
              Boolean
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: "grape", to: "pink", deg: 35 }}
              onClick={() => {
                setIsOpenMultivariate(true);
                setIsOpenModal(false);
              }}
            >
              Multivariate
            </Button>
          </p>
        </Modal>
        <Modal
          opened={isOpenBoolean}
          onClose={() => setIsOpenBoolean(false)}
          // withCloseButton={false}
          size="lg"
        >
          <Box sx={{ maxWidth: 300 }} mx="auto">
            <form
              onSubmit={form.onSubmit((values) => {
                setArrayFlags([...arrayFlags, values.name]);
                setIsOpenBoolean(false);
              })}
            >
              <TextInput
                label="Name"
                placeholder="Name"
                {...form.getInputProps("name")}
              />
              <Group position="right" mt="md">
                <Button type="submit">Add</Button>
              </Group>
            </form>
          </Box>
        </Modal>
        <Button
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          onClick={() => setIsOpenModal(true)}
        >
          + Add Flag
        </Button>
        <SearchIcon>
          <Icon>
            {" "}
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
            >
              <path
                d="M7.125 13.25c1.617 0 3.32-.695 4.375-1.75L15 15l-3.5-3.5c1.021-1.005 1.75-2.894 1.75-4.375a6.125 6.125 0 10-6.125 6.125z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </Icon>
          <Input />
        </SearchIcon>
      </WrapperButton>
      <Background>
        <FF>
          <div>FF-FEATUREFLAGS</div>
          <div>DETAILS</div>
          <div>STATUS</div>
          <div>RESULTS</div>
        </FF>
        {arrayFlags.map((value) => (
          <SwitchOff>
            <Switch /> {value}
          </SwitchOff>
        ))}
        <SwitchOff>
          <Switch /> sdfdfs
        </SwitchOff>
        <SwitchOff>
          <Switch /> sdfdfs
        </SwitchOff>
      </Background>
      {/* <SwitchOff>
        <Switch /> Offline Support
      </SwitchOff> */}

      <Modal
        opened={isOpenMultivariate}
        onClose={() => setIsOpenMultivariate(false)}
        // withCloseButton={false}
        size="lg"
      ></Modal>
    </>
  );
}

const WrapperFlags = styled.div`
  color: black;
  font-size: 16px;
  /* float: left; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #d9dae5;
  border-bottom: 1px solid #d9dae5;
  padding: 10px 15px;
  background-color: #effbff;
`;
const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #d9dae5;
  background-color: #effbff;
`;

const Input = styled.input`
  color: white;
  border: 1px solid #d9dae5;
  border-radius: 5px;
  padding: 8px 12px;
  outline: none;
  background: #fff;
  appearance: none;
  font-size: 13px;
  width: 100% !important;
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
  height: 66.6%;
  /* height: 100%; */
  background-color: #effbff;
  padding: 10px;
  justify-content: space-around;
  flex-direction: row;
`;

const SwitchOff = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 4px;
  box-shadow: 0 1px 5px -4px black;
  background-color: white;
  margin-bottom: 20px;
  padding: 25px;
  width: 90%;
  margin-left: 5%;
`;

const FF = styled.div`
  display: flex;
  background-color: #effbff;
  padding: 10px;
  justify-content: space-around;
`;
export default Flags;
