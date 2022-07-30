import { Icon, IconProps } from "../../Icon";
import * as Styled from "./index.style";

export interface DropDownItemProps {
  /**
   * 項目名
   */
  label: string;
  /**
   * 現在のページかどうか
   */
  isActive?: boolean;
  /**
   * アイコンの種類
   */
  iconName: IconProps["name"];
  /**
   * 選択した際のイベント
   */
  onClick?: () => void;
}

/**
 * ドロップダウンのメニューの1項目のコンポーネント
 */
export const DropDownItem: React.FC<DropDownItemProps> = ({
  label,
  isActive,
  onClick,
  iconName,
}) => {
  return (
    <Styled.Container isActive={isActive} onClick={onClick}>
      <Icon name={iconName} size="20px" />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  );
};
