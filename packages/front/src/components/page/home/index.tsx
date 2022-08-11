import { gql, useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import { Button, Icon } from "shared/components/ui";
import { Divider } from "shared/components/util";
import * as Styled from "./index.style";

const GET_USER = gql`
  query GetUser {
    user {
      name
      bio
      phone
      email
      photoURL
    }
  }
`;

export const HomePage: React.FC = () => {
  const { loading, data } = useQuery(GET_USER);
  const { user, isLoading } = useAuth0();

  if (isLoading || loading) {
    return <main>Loading...</main>;
  }

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
          <Icon name="UserCircle" size="72px" />
        </Styled.RowContent>
      </Styled.Row>
      <Divider />
      <Styled.Row>
        <Styled.RowTitle>NAME</Styled.RowTitle>
        <Styled.RowContent>{data.user.name}</Styled.RowContent>
      </Styled.Row>
      <Divider />
      <Styled.Row>
        <Styled.RowTitle>BIO</Styled.RowTitle>
        <Styled.RowContent>{data.user.bio}</Styled.RowContent>
      </Styled.Row>
      <Divider />
      <Styled.Row>
        <Styled.RowTitle>PHONE</Styled.RowTitle>
        <Styled.RowContent>{data.user.phone}</Styled.RowContent>
      </Styled.Row>
      <Divider />
      <Styled.Row>
        <Styled.RowTitle>EMAIL</Styled.RowTitle>
        <Styled.RowContent>{user?.email}</Styled.RowContent>
      </Styled.Row>
      <Divider />
      <Styled.Row>
        <Styled.RowTitle>PASSWORD</Styled.RowTitle>
        <Styled.RowContent>************</Styled.RowContent>
      </Styled.Row>
    </main>
  );
};
