import React from "react";
import * as Styled from "./index.style";

export interface TextAreaProps extends React.ComponentProps<"textarea"> {
  /**
   * ラベル
   */
  label?: string;
  /**
   * 幅
   */
  width?: string;
}

/**
 * TextAreaコンポーネントを使えば、シンプルなテキストエリアを作ることが出来ます。
 */
export const TextArea: React.FC<TextAreaProps> = ({
  label,
  width,
  ...inputProps
}) => {
  return (
    <Styled.Label>
      {label}
      <br />
      <Styled.TextArea width={width} {...inputProps} />
    </Styled.Label>
  );
};
