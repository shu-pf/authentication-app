import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput as Component } from ".";

export default {
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter your name...",
  label: "Name",
};

export const Fill = Template.bind({});
Fill.args = {
  value: "Xanthe Neal",
  placeholder: "Enter your name...",
  label: "Name",
};
