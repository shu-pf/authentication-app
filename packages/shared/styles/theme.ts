import { Theme } from "@emotion/react";

export const theme: Theme = {
  colors: {
    // このUIで基調となるメインカラー、塗りやテキストに使います。
    mainPrimary: "#2F80ED",
    // 塗りやテキストに使います。
    basePrimary: "#000000",
    baseSecondary: "#333333",
    baseTertiary: "#9E9E9E",
    baseQuaternary: "#828282",
    baseLink: "#2D9CDB",
    baseWhite: "#FFFFFF",
    // 背景色に使います。
    bgPrimary: "#FFFFFF",
    // 区切り線や囲み線に使います。
    separateContents: "#BDBDBD",
    // エラーや成功などを知らせる時使います。（マテリアルカラー表参考）
    // information: {
    //   //
    // },
    // 背景やオブジェクトに重ねる色として使います。
    // overlay: {
    //   //
    // },
    // イレギュラーなケースで、特定の機能やページで使われる色です。
    // unique: {
    //   //
    // },
  },
  typographies: {
    h1: {
      fontWeight: 400,
      fontSize: "36px",
      lineHeight: "49.03px",
      letterSpacing: "-3.5%",
    },
    h2: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "32.69px",
      letterSpacing: "-3.5%",
    },
    h3: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "24.52px",
      letterSpacing: "-3.5%",
    },
    buttonBold: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "21.79px",
      letterSpacing: "-3.5%",
    },
    buttonRegular: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "21.79px",
      letterSpacing: "-3.5%",
    },
    subTitle: {
      fontWeight: 300,
      fontSize: "18px",
      lineHeight: "25px",
      letterSpacing: "-3.5%",
    },
    input: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "21.79px",
      letterSpacing: "-3.5%",
    },
    label: {
      fontWeight: 500,
      fontSize: "13px",
      lineHeight: "17.71px",
      letterSpacing: "-3.5%",
    },
    body: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "21.79px",
      letterSpacing: "-3.5%",
    },
    caption: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "19px",
      letterSpacing: "-3.5%",
    },
    tableCaption: {
      fontWeight: 500,
      fontSize: "13px",
      lineHeight: "17.71px",
      letterSpacing: "-3.5%",
    },
    tableBody: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "24.52px",
      letterSpacing: "-3.5%",
    },
    link: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "-3.5%",
      letterSpacing: "-3.5%",
    },
    footerBold: {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "19px",
      letterSpacing: "-3.5%",
    },
    footerRegular: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "19px",
      letterSpacing: "-3.5%",
    },
  },
};
