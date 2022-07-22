import "@emotion/react";

interface Typography {
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}

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
    typographies: {
      h1: Typography;
      h2: Typography;
      h3: Typography;
      buttonBold: Typography;
      buttonRegular: Typography;
      input: Typography;
      label: Typography;
      subTitle: Typography;
      body: Typography;
      caption: Typography;
      tableCaption: Typography;
      tableBody: Typography;
      link: Typography;
      footerBold: Typography;
      footerRegular: Typography;
    };
  }
}
