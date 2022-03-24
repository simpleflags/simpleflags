import React from "react";
import styled from "styled-components";
import { useForm } from "@mantine/form";
import { TextInput, Group, Button, Box } from "@mantine/core";
import logo from "../../logo.svg";
import feature from "../img/feature.png";
function ForgotPassw() {
  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${feature})`,
      }}
    >
      <Wrapper>
        <Box sx={{ maxWidth: 340 }} mx="auto">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Email>Email</Email>
            <TextInput
              required
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />

            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  padding: 40px;
  -webkit-box-shadow: 0px 2px 15px 5px #dedede;
  box-shadow: 0px 2px 15px 5px #dedede;
  background-color: white;
  border-radius: 15px;
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
`;
const Email = styled.div`
  width: 45px;
  margin-bottom: 12px;
`;

export default ForgotPassw;
