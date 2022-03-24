import React from "react";
import styled from "styled-components";
import { TextInput, Button, Group, Box, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.svg";
import feature from "../img/feature.png";
import { api } from "../../api";

type User = {
  email: string;
  password: string;
  repeat_password: string;
};

function SignUp() {
  const onSubmit = (user: User) => {
    api.post("/signup", user);
  };

  const navigate = useNavigate();
  const {
    values,
    onSubmit: mantineSubmit,
    getInputProps,
  } = useForm({
    initialValues: {
      email: "",
      password: "",
      repeat_password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length > 5 ? null : "password must be at least 5 caracters",
      repeat_password: (value) =>
        values.password === value ? null : "password do not match",
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
        <Box sx={{ maxWidth: 300 }} mx="auto">
          <img src={logo} className="App-logo" alt="logo" />
          <EmailPassword>
            <form
              onSubmit={mantineSubmit((values: User) => {
                onSubmit(values);
              })}
            >
              <Email>Email</Email>
              <TextInput
                required
                placeholder="your@email.com"
                {...getInputProps("email")}
              />
              <Password>Password</Password>
              <PasswordInput
                placeholder="Password"
                {...getInputProps("password")}
              />
              <PasswordGap>
                <PasswordInput
                  placeholder="Repeat password"
                  {...getInputProps("repeat_password")}
                />
              </PasswordGap>
              <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </EmailPassword>
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
const PasswordGap = styled.div`
  padding-top: 30px;
`;
export default SignUp;
