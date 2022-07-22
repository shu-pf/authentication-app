import React from "react";
import * as Styled from "./index.style";

export interface TextInputWithIconProps extends React.ComponentProps<"input"> {}

/**
 * アイコン付きのテキストインプット
 */
export const TextInputWithIcon: React.FC<TextInputWithIconProps> = ({
  ...props
}) => {
  return <Styled.Input type="text" {...props} />;
};
