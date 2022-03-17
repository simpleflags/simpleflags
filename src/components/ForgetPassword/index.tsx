import React from "react";
import styled from "styled-components";
import { useForm } from "@mantine/form";
import { PasswordInput, Group, Button, Box } from "@mantine/core";
import logo from "../../logo.svg";
function ForgetPassw() {
  const form = useForm({
    initialValues: {
      password: "secret",
      confirmPassword: "sevret",
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  return (
    <Wrapper>
      <Box sx={{ maxWidth: 340 }} mx="auto">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Password>Password</Password>
          <PasswordInput
            placeholder="Password"
            {...form.getInputProps("password")}
          />
          <ConfirmPassword>Confirm password</ConfirmPassword>
          <PasswordInput
            mt="sm"
            placeholder="Confirm password"
            {...form.getInputProps("confirmPassword")}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </Wrapper>
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
const Password = styled.div`
  width: 45px;
  margin-bottom: 12px;
`;
const ConfirmPassword = styled.div`
  display: flex;
  width: 50%;
  margin-bottom: 12px;
  margin-top: 12px;
`;
export default ForgetPassw;
