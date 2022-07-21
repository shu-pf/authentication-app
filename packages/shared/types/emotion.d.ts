import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      mainPrimary: string;
      basePrimary: string;
      baseSecondary: string;
      baseTertiary: string;
      baseQuaternary: string;
      baseWhite: string;
      baseLink: string;
      bgPrimary: string;
      separateContents: string;
    };
  }
}
