import * as Styled from "./index.style";
import { Button, IconButton, TextInputWithIcon } from "shared/components/ui";
import { Flex, Spacer } from "shared/components/util";
import Link from "next/link";

export const HomeContainer: React.FC = () => {
  return (
    <>
      <Styled.Title>
        Join thousands of learners from around the world
      </Styled.Title>
      <Styled.Body>
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </Styled.Body>
      <Spacer height="34.5px" />
      <TextInputWithIcon width="100%" iconName="Email" placeholder="Email" />
      <Spacer height="14.5px" />
      <TextInputWithIcon
        width="100%"
        iconName="Password"
        placeholder="Password"
      />
      <Spacer height="22.5px" />
      <Button width="100%">Start coding now</Button>
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
        Already a member?
        <Link href="/login">
          <Styled.Link>Login</Styled.Link>
        </Link>
      </Styled.Caption>
    </>
  );
};
