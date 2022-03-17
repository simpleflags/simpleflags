import React from "react";
import styled from "styled-components";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.svg";

function SignUp() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (/^\S+@\S+$/.test(value) ? null : "password"),
    },
  });
  return (
    <Wrapper>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <img src={logo} className="App-logo" alt="logo" />
        <EmailPassword>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Email>Email</Email>
            <TextInput
              required
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <Password>Password</Password>
            <PasswordInput
              placeholder="Password"
              {...form.getInputProps("password")}
            />
            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </EmailPassword>
      </Box>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 40px;
  /* padding-top: 80px; */
  -webkit-box-shadow: 0px 2px 15px 5px #dedede;
  box-shadow: 0px 2px 15px 5px #dedede;
  background-color: white;
  border-radius: 15px;
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
`;
const EmailPassword = styled.div`
  color: black;
  padding-top: 50px;
`;
const Email = styled.div`
  width: 45px;
  margin-bottom: 12px;
`;
const Password = styled.div`
  margin-bottom: 12px;
  margin-top: 15px;
  width: 45px;
`;
export default SignUp;
