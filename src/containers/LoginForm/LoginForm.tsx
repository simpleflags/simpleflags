import { Button, Divider, PasswordInput, TextInput } from "@mantine/core";
import { BrandGithub, BrandGitlab } from "tabler-icons-react";
import {
  FormWrapper,
  HelperText,
  InputsWrapper,
  LinkText,
  Title,
  Wrapper,
} from "./LoginForm.styled";

export function LoginForm() {
  return (
    <Wrapper>
      <Title>Sign in</Title>

      <FormWrapper>
        <Button
          fullWidth
          leftIcon={<BrandGithub />}
          sx={(theme) => ({
            backgroundColor:
              theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
            color: "#fff",
            "&:hover": {
              backgroundColor:
                theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
            },
          })}
          radius="md"
          size="md"
          my="sm"
        >
          Sign in with Github
        </Button>
        <Button
          fullWidth
          leftIcon={<BrandGitlab />}
          sx={(theme) => ({
            backgroundColor:
              theme.colors.orange[theme.colorScheme === "dark" ? 9 : 6],
            color: "#fff",
            "&:hover": {
              backgroundColor:
                theme.colors.orange[theme.colorScheme === "dark" ? 9 : 6],
            },
          })}
          radius="md"
          size="md"
        >
          Sign in with Gitlab
        </Button>
        <Divider my="xs" label="or continue with" labelPosition="center" />

        <InputsWrapper>
          <TextInput
            placeholder="john@doe.com"
            label="Email"
            radius="md"
            my="sm"
          />
          <PasswordInput placeholder="*******" label="Password" radius="md" />
          <HelperText>
            <LinkText>Forgot password?</LinkText>
          </HelperText>
        </InputsWrapper>

        <Button fullWidth radius="md">
          Sign in
        </Button>
      </FormWrapper>
    </Wrapper>
  );
}
