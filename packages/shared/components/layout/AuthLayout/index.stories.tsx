import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AuthLayout as Component } from ".";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const AuthLayout = Template.bind({});
AuthLayout.args = {
  children: <div>Main Content</div>,
};
