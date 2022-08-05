import {
  DropDownContainer,
  DropDownItem,
  DropDownNavigation,
} from "shared/components/ui";
import { Divider } from "shared/components/util";

export const HeaderNavigation: React.FC = () => {
  return (
    <DropDownNavigation userName="Xanthe Neal">
      <DropDownContainer>
        <DropDownItem isActive iconName="UserCircle" label="My Profile" />
        <DropDownItem iconName="Group" label="Group Chat" />
        <Divider />
        <DropDownItem iconName="Logout" label="Logout" color="#EB5757" />
      </DropDownContainer>
    </DropDownNavigation>
  );
};
