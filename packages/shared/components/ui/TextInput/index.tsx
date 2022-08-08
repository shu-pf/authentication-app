import React from "react";
import * as Styled from "./index.style";

export interface TextInput extends React.ComponentProps<"input"> {
  /**
   * ラベル
   */
  label?: string;
  /**
   * 幅
   */
  width?: string;
  /**
   * インプットタイプ
   */
  type?: "text" | "email" | "password";
}

/**
 * TextInputコンポーネントを使えば、シンプルなテキストインプットを作ることが出来ます。
 */
export const TextInput: React.FC<TextInput> = ({
  label,
  width,
  type = "text",
  ...inputProps
}) => {
  return (
    <Styled.Label>
      {label}
      <br />
      <Styled.Input type={type} width={width} {...inputProps} />
    </Styled.Label>
  );
};
