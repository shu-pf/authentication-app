import React from "react";
import * as Styled from "./index.style";

type LabelProps = React.ComponentProps<"label">;

/**
 * Labelを表示するコンポーネント
 */
export const Label: React.FC<LabelProps> = ({ children }) => {
  return <Styled.Label>{children}</Styled.Label>;
};
