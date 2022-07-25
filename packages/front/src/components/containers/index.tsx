import * as Styled from "./index.style";
import { Button, TextInputWithIcon } from "shared/components";

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
      <TextInputWithIcon width="100%" iconName="Email" placeholder="Email" />
      <TextInputWithIcon
        width="100%"
        iconName="Password"
        placeholder="Password"
      />
      <Button width="100%">Start coding now</Button>
    </Styled.Container>
  );
};
