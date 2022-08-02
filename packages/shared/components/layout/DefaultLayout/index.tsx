import * as Styled from "./index.style";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Spacer } from "../../util";

interface AuthLayoutProps {
  children: React.ReactNode;
  navigation: React.ReactNode;
  title: string;
  subTitle: string;
}

/**
 * ログイン後に使用するレイアウトです。
 */
export const DefaultLayout = ({
  title,
  subTitle,
  navigation,
  children,
}: AuthLayoutProps) => {
  return (
    <>
      <Header navigation={navigation} />
      <Styled.Container>
        <Spacer height="40px" />
        <Styled.Title>{title}</Styled.Title>
        <Styled.SubTitle>{subTitle}</Styled.SubTitle>
        <Spacer height="44px" />
        <Styled.Content>
          <Styled.Main>{children}</Styled.Main>
          <Footer />
        </Styled.Content>
      </Styled.Container>
    </>
  );
};
