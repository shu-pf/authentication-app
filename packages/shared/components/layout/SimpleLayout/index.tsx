import * as Styled from "./index.style";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Spacer } from "../../util";

interface AuthLayoutProps {
  children: React.ReactNode;
  navigation: React.ReactNode;
}

/**
 * ログイン後に使用するシンプルなレイアウトです。
 */
export const SimpleLayout = ({ navigation, children }: AuthLayoutProps) => {
  return (
    <>
      <Header navigation={navigation} />
      <Styled.Container>
        <Spacer height="40px" />
        <Spacer height="44px" />
        <Styled.Content>
          <Styled.Main>{children}</Styled.Main>
          <Footer />
        </Styled.Content>
      </Styled.Container>
    </>
  );
};
