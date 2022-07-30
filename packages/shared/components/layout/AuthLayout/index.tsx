import type { ReactElement } from "react";
import * as Styled from "./index.style";
import { Footer } from "../parts/Footer";

interface AuthLayoutProps {
  children: ReactElement;
}

/**
 * ログイン画面・新規登録画面で使用するレイアウトです。
 */
export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Main>{children}</Styled.Main>
        <Footer />
      </Styled.Content>
    </Styled.Container>
  );
};
