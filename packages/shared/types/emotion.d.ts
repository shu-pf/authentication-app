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
      // main: このUIで基調となるメインカラー、塗りやテキストに使います。
      mainPrimary: string;
      // base: 塗りやテキストに使います。
      basePrimary: string;
      baseSecondary: string;
      baseTertiary: string;
      baseQuaternary: string;
      baseWhite: string;
      baseLink: string;
      // bg: 背景色に使います。
      bgPrimary: string;
      bgActive: string;
      // separate: 区切り線や囲み線に使います。
      separateContents: string;
      // information: エラーや成功などを知らせる時使います。（マテリアルカラー表参考）
      // overlay: 背景やオブジェクトに重ねる色として使います。
      overlayShadow: string;
      // unique: イレギュラーなケースで、特定の機能やページで使われる色です。
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
