import Link from "next/link";
import { Button, Icon } from "shared/components/ui";
import { Divider } from "shared/components/util";
import * as Styled from "./index.style";

export const HomePage: React.FC = () => {
  return (
    <main>
      <Styled.TitleContainer>
        <div>
          <Styled.Title>Profile</Styled.Title>
          <Styled.SubTitle>
            Some info may be visible to other people
          </Styled.SubTitle>
        </div>
        <Link href="/edit">
          <a>
            <Button variant="secondary" width="95.34px" height="38px">
              Edit
            </Button>
          </a>
        </Link>
      </Styled.TitleContainer>
      <Divider />
      <Styled.Row>
        <Styled.RowTitle>PHOTO</Styled.RowTitle>
        <Styled.RowContent>
          <Icon name="UserCircle" size="72px"></Icon>
        </Styled.RowContent>
      </Styled.Row>
      <Divider />
      <Styled.Row>
        <Styled.RowTitle>NAME</Styled.RowTitle>
        <Styled.RowContent>Xanthe Neal</Styled.RowContent>
      </Styled.Row>
      <Divider />
      <Styled.Row>
        <Styled.RowTitle>BIO</Styled.RowTitle>
        <Styled.RowContent>
          I am a software developer and a big fan of devchallenges...
        </Styled.RowContent>
      </Styled.Row>
      <Divider />
      <Styled.Row>
        <Styled.RowTitle>PHONE</Styled.RowTitle>
        <Styled.RowContent>908249274292</Styled.RowContent>
      </Styled.Row>
      <Divider />
      <Styled.Row>
        <Styled.RowTitle>EMAIL</Styled.RowTitle>
        <Styled.RowContent>xanthe.neal@gmail.com</Styled.RowContent>
      </Styled.Row>
      <Divider />
      <Styled.Row>
        <Styled.RowTitle>PASSWORD</Styled.RowTitle>
        <Styled.RowContent>************</Styled.RowContent>
      </Styled.Row>
    </main>
  );
};
