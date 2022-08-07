import * as Styled from "./index.style";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Spacer } from "../../util";

interface AuthLayoutProps {
  children: React.ReactNode;
  navigation: React.ReactNode;
  header: React.ReactNode;
}

/**
 * ログイン後に使用するシンプルなレイアウトです。
 */
export const SimpleLayout = ({
  header,
  navigation,
  children,
}: AuthLayoutProps) => {
  return (
    <>
      <Header navigation={navigation} />
      <Styled.Container>
        <Styled.Content>
          <Spacer height="48px" />
          {header}
          <Spacer height="30px" />
          <Styled.Main>{children}</Styled.Main>
          <Footer />
        </Styled.Content>
      </Styled.Container>
    </>
  );
};
