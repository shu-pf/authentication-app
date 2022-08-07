import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Anchor as Component } from ".";

export default {
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Anchor = Template.bind({});
Anchor.args = {
  children: "Back",
  iconName: "AngleLeft",
  href: "#",
};
