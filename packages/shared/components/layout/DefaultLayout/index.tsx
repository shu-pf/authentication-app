import * as Styled from "./index.style";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";

interface AuthLayoutProps {
  children: React.ReactNode;
  navigation: React.ReactNode;
}

/**
 * ログイン後に使用するレイアウトです。
 */
export const DefaultLayout = ({ navigation, children }: AuthLayoutProps) => {
  return (
    <>
      <Header navigation={navigation} />
      <Styled.Container>
        <Styled.Content>
          <Styled.Main>{children}</Styled.Main>
          <Footer />
        </Styled.Content>
      </Styled.Container>
    </>
  );
};
