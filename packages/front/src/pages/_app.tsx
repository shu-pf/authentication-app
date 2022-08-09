import { ThemeProvider, Global } from "@emotion/react";
import { theme } from "shared/styles/theme";
import { GlobalStyle } from "shared/styles/globals";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { Auth0Provider } from "@auth0/auth0-react";
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
    <Auth0Provider
      domain="devchallenges.jp.auth0.com"
      clientId="qW7eeaFyJAe3ZmquPkVB3vKG1pUvHjwZ"
      redirectUri="http://localhost:3000/"
    >
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default MyApp;
