import { css, Theme } from "@emotion/react";

export const GlobalStyle = (theme: Theme) =>
  css({
    /* グローバルに適用したいCSSを記述する */
    "*,*::before,*::after": {
      fontFamily: "Noto Sans",
    },
  });
