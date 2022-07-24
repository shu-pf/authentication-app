import React from "react";
import * as Styled from "./index.style";
import { Icon, IconProps } from "../Icon";
import { useTheme } from "@emotion/react";

export interface TextInputWithIconProps extends React.ComponentProps<"input"> {
  /**
   * アイコンの種類
   */
  iconName: IconProps["name"];
}

/**
 * アイコン付きのテキストインプット
 */
export const TextInputWithIcon: React.FC<TextInputWithIconProps> = ({
  iconName,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Styled.Container>
      <Styled.IconWrapper>
        <Icon name={iconName} size="24px" color={theme.colors.baseQuaternary} />
      </Styled.IconWrapper>
      <Styled.Input type="text" {...props} />
    </Styled.Container>
  );
};
