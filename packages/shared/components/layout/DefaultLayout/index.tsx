import type { ReactElement } from "react";
import * as Styled from "./index.style";
import { Footer } from "../parts/Footer";

interface AuthLayoutProps {
  children: ReactElement;
}

/**
 * ログイン後に使用するレイアウトです。
 */
export const DefaultLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Main>{children}</Styled.Main>
        <Footer />
      </Styled.Content>
    </Styled.Container>
  );
};
