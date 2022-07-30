import * as Styled from "./index.style";

interface DropDownContainerProps {
  /**
   * メニューの中身
   */
  children: React.ReactNode;
}

/**
 * ドロップダウンのメニューのコンテナーコンポーネント
 */
export const DropDownContainer: React.FC<DropDownContainerProps> = ({
  children,
}) => {
  return <Styled.DropDownContainer>{children}</Styled.DropDownContainer>;
};
