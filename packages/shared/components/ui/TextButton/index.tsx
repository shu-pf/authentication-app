import React from "react";
import { Icon, IconProps } from "../Icon";
import * as Styled from "./index.style";

export interface TextButtonProps extends React.ComponentProps<"button"> {
  /**
   * アイコンの種類
   */
  iconName: IconProps["name"];
}

/**
 * TextButtonコンポーネントを使えば、シンプルなテキストのみのボタンを作ることが出来ます。
 */
export const TextButton: React.FC<TextButtonProps> = ({
  children,
  iconName,
  ...props
}) => {
  return (
    <Styled.Button {...props}>
      <Styled.IconWrapper>
        <Icon name={iconName} size="18px" />
      </Styled.IconWrapper>
      <Styled.Label>{children}</Styled.Label>
    </Styled.Button>
  );
};
