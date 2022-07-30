import { Content, UserName } from "./index.style";
import { Icon } from "../Icon";

export const DropDownNavigation: React.FC = () => {
  return (
    <Content>
      <Icon name="UserCircle" color="#000" size="32px" />
      <UserName>Xanthe Neal</UserName>
      <Icon name="AngleDown" color="#000" size="24px" />
    </Content>
  );
};
