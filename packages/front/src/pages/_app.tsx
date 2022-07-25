import { ThemeProvider, Global } from "@emotion/react";
import { theme } from "shared/styles/theme";
import { GlobalStyle } from "shared/styles/globals";
// リセットCSS
import "ress";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
