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
}

export const DropDownNavigation: React.FC<DropDownNavigationProps> = ({
  userName,
  children,
}) => {
  return (
    <Styled.Content>
      <Icon name="UserCircle" color="#000" size="32px" />
      <Styled.UserName>{userName}</Styled.UserName>
      <Icon name="AngleDown" color="#000" size="24px" />
      {children}
    </Styled.Content>
  );
};
