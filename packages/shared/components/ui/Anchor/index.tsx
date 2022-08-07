import React from "react";
import { Icon, IconProps } from "../Icon";
import * as Styled from "./index.style";

export interface AnchorProps extends React.ComponentProps<"a"> {
  /**
   * アイコンの種類
   */
  iconName: IconProps["name"];
}

/**
 * Anchorコンポーネントを使えば、テーマカラーやタイポグラフィースタイルでアンカーエレメントを簡単にカスタマイズすることができます。
 */
export const Anchor: React.FC<AnchorProps> = ({
  children,
  iconName,
  ...props
}) => {
  return (
    <Styled.A {...props}>
      <Styled.IconWrapper>
        <Icon name={iconName} size="18px" />
      </Styled.IconWrapper>
      <Styled.Label>{children}</Styled.Label>
    </Styled.A>
  );
};
