import React from "react";
import * as Styled from "./index.style";

export interface FlexProps extends React.ComponentProps<"div"> {
  /**
   * Flexレイアウトを適用するコンポーネント
   */
  children: React.ReactNode;
  /**
   * gap は CSS のプロパティで、行や列の間のすき間 (溝) を定義します。これは row-gap および column-gap の一括指定です。
   */
  gap?: string;
}

/**
 * 子要素にFlexレイアウトを適用するコンポーネント
 */
export const Flex: React.FC<FlexProps> = ({ children, ...props }) => {
  return <Styled.Flex {...props}>{children}</Styled.Flex>;
};
