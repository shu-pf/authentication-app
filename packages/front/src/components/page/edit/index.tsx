import { Button, Icon, TextInput } from "shared/components/ui";
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
      <Spacer height="32px" />
      <TextInput label="Name" placeholder="Enter your name..." />
      <Spacer height="24px" />
      <TextInput label="Phone" placeholder="Enter your phone..." />
      <Spacer height="24px" />
      <TextInput type="email" label="Email" placeholder="Enter your email..." />
      <Spacer height="24px" />
      <TextInput
        type="password"
        label="Password"
        placeholder="Enter your new password..."
      />
      <Spacer height="24px" />
      <Button width="82px">Save</Button>
    </Styled.Main>
  );
};
