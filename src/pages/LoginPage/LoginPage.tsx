import { Image } from "@mantine/core";
import ff_login from "../../assets/images/ff-login.png";
import { FormSection, ImageSection, PageWrapper } from "./LoginPage.styled";
import { LoginForm } from "../../containers";

export function LoginPage() {
  return (
    <PageWrapper>
      <ImageSection>
        <Image src={ff_login} width={450} height={450} alt="flag" />
      </ImageSection>
      SimpleFlags
      <FormSection>
        <LoginForm />
      </FormSection>
    </PageWrapper>
  );
}
