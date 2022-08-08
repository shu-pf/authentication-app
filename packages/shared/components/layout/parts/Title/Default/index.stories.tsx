import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DefaultTitle as Component } from ".";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Personal info",
  subTitle: "Basic info, like your name and photo",
};
