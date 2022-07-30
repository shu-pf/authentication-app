import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DropDownNavigation as Component, DropDownContainer } from ".";
import { DropDownItem } from "./DropDownItem";
import { Divider } from "../../util/Divider";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

export const DropDownNavigation: ComponentStory<typeof Component> = (args) => (
  <Component {...args}></Component>
);
DropDownNavigation.args = {
  userName: "Xanthe Neal",
  children: (
    <DropDownContainer>
      <DropDownItem isActive iconName="UserCircle" label="My Profile" />
      <DropDownItem iconName="Group" label="Group Chat" />
      <Divider />
      <DropDownItem iconName="Logout" label="Logout" color="#EB5757" />
    </DropDownContainer>
  ),
};
