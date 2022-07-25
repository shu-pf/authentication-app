import * as Styled from "./index.style";
import { Button, Spacer, TextInputWithIcon } from "shared/components";

export const HomeContainer: React.FC = () => {
  return (
    <Styled.Container>
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
    </Styled.Container>
  );
};
