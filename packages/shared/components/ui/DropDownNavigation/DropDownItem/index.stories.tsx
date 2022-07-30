import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DropDownItem as Component } from ".";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Group Chat",
  iconName: "Group",
};

export const Active = Template.bind({});
Active.args = {
  label: "My Profile",
  iconName: "UserCircle",
  isActive: true,
};

export const Red = Template.bind({});
Red.args = {
  label: "Logout",
  color: "#EB5757",
  iconName: "Logout",
};
