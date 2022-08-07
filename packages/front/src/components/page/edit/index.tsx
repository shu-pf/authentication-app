import { Icon } from "shared/components/ui";
import { Flex, Spacer } from "shared/components/util";
import * as Styled from "./index.style";

export const EditPage: React.FC = () => {
  return (
    <Styled.Main>
      <Styled.Title>Change Info</Styled.Title>
      <Styled.SubTitle>
        Changes will be reflected to every services
      </Styled.SubTitle>
      <Spacer height="25px" />
      <Flex alignItemsCenter>
        <Styled.IconWrapper>
          <Icon name="UserCircle" size="72px" color="#4F4F4F" />
        </Styled.IconWrapper>
        <Spacer width="27.5px" />
        <Styled.PhotoLabel>CHANGE PHOTO</Styled.PhotoLabel>
      </Flex>
    </Styled.Main>
  );
};
