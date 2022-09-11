import { ThemeProvider, Global } from "@emotion/react";
import { theme } from "shared/styles/theme";
import { GlobalStyle } from "shared/styles/globals";
import type { AppProps } from "next/app";
import { Auth0Provider } from "@auth0/auth0-react";
// リセットCSS
import "ress";
import { createClient, Provider } from "urql";
import AuthorizedUrqlProvider from "components/provider/AuthorizedUrqlProvider";

const client = createClient({
  url: "http://localhost:7000/graphql",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Auth0Provider
        audience="https://example-authentication-app-server"
        domain="devchallenges.jp.auth0.com"
        clientId="qW7eeaFyJAe3ZmquPkVB3vKG1pUvHjwZ"
        redirectUri="http://localhost:3000/"
      >
        <AuthorizedUrqlProvider>
          <ThemeProvider theme={theme}>
            <Global styles={GlobalStyle} />
            {<Component {...pageProps} />}
          </ThemeProvider>
        </AuthorizedUrqlProvider>
      </Auth0Provider>
    </Provider>
  );
}

export default MyApp;
