import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Flex as Component } from ".";
import { IconButton } from "../../ui/IconButton";

export default {
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>
    <IconButton iconName="Google" />
    <IconButton iconName="Facebook" />
    <IconButton iconName="Twitter" />
    <IconButton iconName="Github" />
  </Component>
);

export const Flex = Template.bind({});
Flex.args = {
  gap: "20px",
};
