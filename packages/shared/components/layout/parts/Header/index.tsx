import { Logo } from "../../../ui/Logo";
import * as Styled from "./index.style";

export const Header: React.FC = () => {
  return (
    <Styled.Content>
      <Logo />
      <Styled.Regular>devChallenges.io</Styled.Regular>
    </Styled.Content>
  );
};
