import React from "react";
import * as Styled from "./index.style";

export interface SpacerProps {
  /**
   * 幅
   */
  width?: string;
  /**
   * 高さ
   */
  height?: string;
}

/**
 * コンポーネント間のマージンを作るコンポーネント
 */
export const Spacer: React.FC<SpacerProps> = (props) => {
  return <Styled.Box {...props} />;
};
