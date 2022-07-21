import React from "react";
import * as Styled from "./index.style";

interface ButtonProps {
  /**
   * ボタンの中身
   */
  children: string;
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
