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
   * 表示色
   */
  color: string;
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
  color,
}) => {
  return (
    <Styled.Container isActive={isActive} onClick={onClick}>
      <Icon name={iconName} size="20px" color={color} />
      <Styled.Label color={color}>{label}</Styled.Label>
    </Styled.Container>
  );
};
