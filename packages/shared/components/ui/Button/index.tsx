import React from "react";
import * as Styled from "./index.style";

export interface ButtonProps extends React.ComponentProps<"button"> {
  /**
   * ボタンの中身
   */
  children: string;
  /**
   * ボタンのスタイル
   */
  variant?: "primary" | "secondary";
  /**
   * ボタンの横幅
   */
  width?: string;
  /**
   * ボタンの縦幅
   */
  height?: string;
  /**
   * オプションのクリックハンドラ
   */
  onClick?: () => void;
}

/**
 * ユーザーとのインタラクションを実現するための主要なUIコンポーネント
 */
export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Styled.Button type="button" {...props}>
      {children}
    </Styled.Button>
  );
};
