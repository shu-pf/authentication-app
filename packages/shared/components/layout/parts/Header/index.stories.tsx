import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header as Component } from ".";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Header = Template.bind({});
