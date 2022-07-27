import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DefaultLayout as Component } from ".";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const DefaultLayout = Template.bind({});
DefaultLayout.args = {
  children: <div>Main Content</div>,
};
