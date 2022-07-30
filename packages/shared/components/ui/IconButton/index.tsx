import { useTheme } from "@emotion/react";
import React from "react";
import { Icon, IconProps } from "../Icon";
import * as Styled from "./index.style";

export interface IconButtonProps extends React.ComponentProps<"button"> {
  /**
   * アイコンの種類
   */
  iconName: IconProps["name"];
  /**
   * オプションのクリックハンドラ
   */
  onClick?: () => void;
}

/**
 * アイコン付きのボタンを描画するコンポーネント
 */
export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Styled.Button type="button" {...props}>
      <Styled.IconWrapper>
        <Icon name={iconName} color={theme.colors.baseQuaternary} size="18px" />
      </Styled.IconWrapper>
    </Styled.Button>
  );
};
