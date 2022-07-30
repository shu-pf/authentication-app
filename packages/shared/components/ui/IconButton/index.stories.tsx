import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IconButton as Component } from ".";

export default {
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const IconButton = Template.bind({});
IconButton.args = {
  iconName: "Github",
};
