import * as Styled from "./index.style";
import { Icon } from "../Icon";
export { DropDownContainer } from "./DropDownContainer";

export interface DropDownNavigationProps {
  /**
   * ユーザー名
   */
  userName: string;
  /**
   * ドロップダウンの中身
   */
  children: React.ReactNode;
  /**
   * 開閉ボタン
   */
  onClick?: () => void;
}

/**
 * ヘッダーに使用するナビゲーションのコンポーネント
 */
export const DropDownNavigation: React.FC<DropDownNavigationProps> = ({
  userName,
  children,
  onClick,
}) => {
  return (
    <Styled.Container>
      <Styled.Button onClick={onClick}>
        <Icon name="UserCircle" color="#333333" size="32px" />
        <Styled.UserName>{userName}</Styled.UserName>
        <Icon name="AngleDown" color="#333333" size="24px" />
      </Styled.Button>
      {children}
    </Styled.Container>
  );
};
