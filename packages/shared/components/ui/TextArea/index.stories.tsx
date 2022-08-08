import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextArea as Component } from ".";

export default {
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter your bio...",
  label: "Bio",
};

export const Fill = Template.bind({});
Fill.args = {
  value: "sample text...",
  placeholder: "Enter your bio...",
  label: "Bio",
};
