import * as Styled from "./index.style";

export const Header: React.FC = () => {
  return (
    <Styled.Content>
      <Styled.Regular>
        created by <Styled.Bold>username</Styled.Bold>
      </Styled.Regular>
      <Styled.Regular>devChallenges.io</Styled.Regular>
    </Styled.Content>
  );
};
