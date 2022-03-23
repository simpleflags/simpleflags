import React, { useEffect, useState, forwardRef } from "react";
import styled from "styled-components";
import {
  Input,
  Select,
  Textarea,
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Modal,
  Avatar,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import Flag from "../Flag";

function Flags() {
  const navigate = useNavigate();
  const [arrayFlags, setArrayFlags] = useState<string[]>([]);
  const [searchFlag, setSearchFlag] = useState/*<string | undefined> */ <any>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenBoolean, setIsOpenBoolean] = useState(false);
  const [isOpenMultivariate, setIsOpenMultivariate] = useState(false);
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
  interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
    image: string;
    label: string;
    description: string;
  }

  const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ image, label, description, ...others }: ItemProps, ref) => (
      <div ref={ref} {...others}>
        <Group noWrap>
          <Avatar src={image} />

          <div>
            <Text size="sm">{label}</Text>
            <Text size="xs" color="dimmed">
              {description}
            </Text>
          </div>
        </Group>
      </div>
    )
  );

  return (
    <>
      <WrapperFlags>
        <Select
          label="Choose employee of the month"
          placeholder="Pick one"
          itemComponent={SelectItem}
          data={arrayFlags}
          onChange={(e) => {
            setSearchFlag(() => {
              return arrayFlags.find((el) => {
                return el === e;
              });
            });
            console.log(e);
          }}
          searchable
          maxDropdownHeight={400}
          nothingFound="Nobody here"
        />
        Feature Flags
        <>
          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            // onClick={() => setIsOpenModal(true)}
            onClick={() => setSearchFlag(true)}
            // onClick={() => navigate("/searchFlag")}
          >
            + Add Flag
          </Button>
        </>
      </WrapperFlags>
      {/* <WrapperButton> */}
      {/* <Modal
        opened={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        withCloseButton={false}
        styles={{
          modal: {
            background:
              "linear-gradient(to right bottom,hsl(236, 50%, 50%), hsl(195, 50%, 50%))",
          },
          close: { color: "black" },
        }}
      > */}
      {/* <Create>Select the Type of Flag You Want to Create</Create> */}
      {/* <StyleButtonModal>
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
      </StyleButtonModal> */}
      {/* </Modal> */}
      {/*First modal */}
      {/* <Modal
        opened={isOpenBoolean}
        onClose={() => setIsOpenBoolean(false)}
        size="lg"
        styles={{
          modal: {
            background:
              "linear-gradient(to right bottom,hsl(236, 50%, 50%), hsl(195, 50%, 50%))",
          },
          close: { color: "black" },
        }}
      > */}
      {/* <Box sx={{ maxWidth: 300 }} mx="auto">
        <form
          onSubmit={form.onSubmit((values) => {
            setArrayFlags([...arrayFlags, values.name]);
            setIsOpenBoolean(false);
          })}
        >
          <AboutFlag>About the flag</AboutFlag>
          <TextInput
            label="Name"
            placeholder="Name"
            {...form.getInputProps("name")}
            styles={{
              label: { color: "white" },
            }}
          />
          <Description>Description</Description>
          <Textarea placeholder="Description" required />

          <Checkbox
            mt="md"
            label="This is a permanent flag"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
            styles={{
              label: { color: "white" },
            }}
          />
          <Group position="right" mt="md">
            <Button type="submit">Next</Button>
          </Group>
        </form>
      </Box> */}
      {/* </Modal> */}
      {/* </WrapperButton> */}
      <Background>
        {/* <FF>
          <div>FF-FEATUREFLAGS</div>
          <div>DETAILS</div>
          <div>STATUS</div>
          <div>RESULTS</div>
        </FF> */}

        {searchFlag && <Flag flag={searchFlag} />}
      </Background>
      <Modal
        opened={isOpenMultivariate}
        onClose={() => setIsOpenMultivariate(false)}
        size="lg"
        styles={{
          modal: {
            background:
              "linear-gradient(to right bottom,hsl(236, 50%, 50%), hsl(195, 50%, 50%))",
          },
          close: { color: "black" },
        }}
      >
        {/* <Box sx={{ maxWidth: 300 }} mx="auto">
          <form
            onSubmit={form.onSubmit((values) => {
              setArrayFlags([...arrayFlags, values.name]);
              setIsOpenMultivariate(false);
            })}
          >
            <TextInput
              label="Name"
              placeholder="Name"
              {...form.getInputProps("name")}
            />

            <Description>Description</Description>
            <Textarea placeholder="Description" required />

            <Group position="right" mt="md">
              <Button type="submit">Add</Button>
            </Group>
          </form>
        </Box> */}
      </Modal>
    </>
  );
}

const WrapperFlags = styled.div`
  color: black;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #d9dae5;
  border-bottom: 1px solid #d9dae5;
  padding: 10px 15px;
  background-color: #effbff;
`;
// const WrapperButton = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   /* padding: 10px 15px; */
//   /* border-bottom: 1px solid #d9dae5; */
//   background-color: #effbff;
// `;

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
  /* height: 66.6%; */
  height: 74.1%;
  padding: 1px;
  background-color: #effbff;
  /* padding: 10px; */
  justify-content: space-around;
  flex-direction: row;
`;

const FF = styled.div`
  display: flex;
  background-color: #effbff;
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
  color: white;
`;

const AboutFlag = styled.div`
  color: white;
  padding-bottom: 20px;
  text-align: center;
`;

const Description = styled.div`
  color: white;
  padding-top: 20px;
`;
export default Flags;
