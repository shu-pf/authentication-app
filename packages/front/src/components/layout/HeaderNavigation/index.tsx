import { useAuth0 } from "@auth0/auth0-react";
import {
  DropDownContainer,
  DropDownItem,
  DropDownNavigation,
} from "shared/components/ui";
import { Divider } from "shared/components/util";

export const HeaderNavigation: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <DropDownNavigation userName="Xanthe Neal">
      <DropDownContainer>
        <DropDownItem isActive iconName="UserCircle" label="My Profile" />
        <DropDownItem iconName="Group" label="Group Chat" />
        <Divider />
        <DropDownItem
          onClick={() => logout({ returnTo: window.location.origin })}
          iconName="Logout"
          label="Logout"
          color="#EB5757"
        />
      </DropDownContainer>
    </DropDownNavigation>
  );
};
