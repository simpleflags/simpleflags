import React, { useState } from "react";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Sign from "../Sign";
import logo from "../../logo.svg";
import feature from "../img/feature.png";
import { api } from "../../api";

type User = {
  email: string;
  password: string;
};

function Login() {
  const onSubmit = (user: User) => {
    api.post("/login", user).then((response) => {
      if (response.status === 200) {
        navigate("/Home");
      }
    });
  };
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length ? null : "Invalid password"),
    },
  });

  return (
    <WrapperImage>
      <Wrapper>
        <Box sx={{ maxWidth: 350 }} mx="auto">
          <img src={logo} className="App-logo" alt="logo" />
          <Sign />

          <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
            <Email>Email</Email>
            <TextInput
              required
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <PassForg>
              <Password>Password</Password>
              <Forget onClick={() => navigate("/ForgotPassword")}>
                Forgot password?
              </Forget>
            </PassForg>
            <PasswordInput
              placeholder="Password"
              {...form.getInputProps("password")}
            />
            <Checkbox
              mt="md"
              label="I agree to sell my privacy"
              {...form.getInputProps("termsOfService", { type: "checkbox" })}
            />

            <Group position="right" mt="md">
              <Button type="submit" /* onClick={() => navigate("/Home")}  */>
                Sign in
              </Button>
            </Group>
            <Acc>
              <div>No account?</div>
              <SignUpp onClick={() => navigate("/SignUp")}>Sign up</SignUpp>
            </Acc>
          </form>
        </Box>
      </Wrapper>
    </WrapperImage>
  );
}
const WrapperImage = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${feature});
`;
const Wrapper = styled.div`
  padding: 40px;
  -webkit-box-shadow: 0px 2px 15px 5px
    ${(props) => props.theme.colors.gainsBoro};
  box-shadow: 0px 2px 15px 5px ${(props) => props.theme.colors.gainsBoro};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 15px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
`;
const Acc = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px;
`;
const SignUpp = styled.div`
  color: ${(props) => props.theme.colors.lightBlue};
  cursor: pointer;
`;

const Email = styled.div`
  width: 45px;
  margin-bottom: 12px;
`;
const PassForg = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Password = styled.div`
  color: ${(props) => props.theme.colors.black};
`;
const Forget = styled.div`
  color: ${(props) => props.theme.colors.lightBlue};
  margin-bottom: 12px;
`;

export default Login;
