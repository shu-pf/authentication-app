import * as Styled from "./index.style";
import {
  Button,
  IconButton,
  Logo,
  TextInputWithIcon,
} from "shared/components/ui";
import { Flex, Spacer } from "shared/components/util";
import Link from "next/link";

export const LoginPage: React.FC = () => {
  return (
    <main>
      <Logo />
      <Spacer height="27px" />
      <Styled.Title>Login</Styled.Title>
      <Spacer height="27px" />
      <TextInputWithIcon width="100%" iconName="Email" placeholder="Email" />
      <Spacer height="14.5px" />
      <TextInputWithIcon
        width="100%"
        iconName="Password"
        placeholder="Password"
        type="password"
      />
      <Spacer height="22.5px" />
      <Button width="100%">Login</Button>
      <Spacer height="31.5px" />
      <Styled.Caption>or continue with these social profile</Styled.Caption>
      <Spacer height="22.5px" />
      <Flex gap="20px" justifyContentCenter>
        <IconButton iconName="Google" />
        <IconButton iconName="Facebook" />
        <IconButton iconName="Twitter" />
        <IconButton iconName="Github" />
      </Flex>
      <Spacer height="27px" />
      <Styled.Caption>
        Already a member?{" "}
        <Link href="/auth/sign-up">
          <Styled.Link>Register</Styled.Link>
        </Link>
      </Styled.Caption>
    </main>
  );
};
