import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon as Component } from ".";

export default {
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Icon = Template.bind({});
Icon.args = {
  name: "Email",
  color: "blue",
  size: "24px",
};
