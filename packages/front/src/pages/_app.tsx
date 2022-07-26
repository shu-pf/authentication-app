import { ThemeProvider, Global } from "@emotion/react";
import { theme } from "shared/styles/theme";
import { GlobalStyle } from "shared/styles/globals";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
// リセットCSS
import "ress";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // ページレベルで定義されたレイアウトがある場合はそれを使用する
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
