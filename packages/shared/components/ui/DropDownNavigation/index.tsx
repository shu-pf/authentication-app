import { Content, UserName } from "./index.style";
import { Icon } from "../Icon";

export interface DropDownNavigationProps {
  /**
   * ユーザー名
   */
  userName: string;
}

export const DropDownNavigation: React.FC<DropDownNavigationProps> = ({
  userName,
}) => {
  return (
    <Content>
      <Icon name="UserCircle" color="#000" size="32px" />
      <UserName>{userName}</UserName>
      <Icon name="AngleDown" color="#000" size="24px" />
    </Content>
  );
};
