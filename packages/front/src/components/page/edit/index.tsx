import { Button, Icon, Label, TextArea, TextInput } from "shared/components/ui";
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
      <TextArea label="Bio" placeholder="Enter your Bio..." />
      <Spacer height="24px" />
      <TextInput label="Phone" placeholder="Enter your phone..." />
      <Spacer height="24px" />
      <Label>Email</Label>
      {/* TODO:Auth0からデータを流し込む */}
      <div>example@email.com</div>
      <Spacer height="24px" />
      <Label>Password</Label>
      <Flex alignItemsCenter gap="24px">
        <div>********</div>
        <Button onClick={() => {}} variant="secondary">
          Change Password
        </Button>
      </Flex>
      <Spacer height="24px" />
      <Button width="82px">Save</Button>
    </Styled.Main>
  );
};
