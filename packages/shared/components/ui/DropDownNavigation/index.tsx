import * as Styled from "./index.style";
import { Icon } from "../Icon";
import { useState } from "react";
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
  const [navigationDisplayed, setNavigationDisplayed] = useState(false);

  const navigationToggle = () => {
    if (navigationDisplayed) setNavigationDisplayed(false);
    else setNavigationDisplayed(true);
  };

  return (
    <Styled.Container>
      <Styled.Button onClick={() => navigationToggle()}>
        <Icon name="UserCircle" color="#333333" size="32px" />
        <Styled.UserName>{userName}</Styled.UserName>
        <Icon name="AngleDown" color="#333333" size="24px" />
      </Styled.Button>
      {navigationDisplayed && children}
    </Styled.Container>
  );
};
