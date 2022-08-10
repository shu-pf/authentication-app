import { ThemeProvider, Global } from "@emotion/react";
import { theme } from "shared/styles/theme";
import { GlobalStyle } from "shared/styles/globals";
import type { AppProps } from "next/app";
import { Auth0Provider } from "@auth0/auth0-react";
// リセットCSS
import "ress";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain="devchallenges.jp.auth0.com"
      clientId="qW7eeaFyJAe3ZmquPkVB3vKG1pUvHjwZ"
      redirectUri="http://localhost:3000/"
    >
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        {<Component {...pageProps} />}
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default MyApp;
