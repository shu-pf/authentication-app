import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globals";

// リセットCSS
import "ress";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Story />
    </ThemeProvider>
  ),
];
