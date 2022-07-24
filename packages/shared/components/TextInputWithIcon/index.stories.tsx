import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInputWithIcon } from ".";

export default {
  component: TextInputWithIcon,
  argTypes: {},
} as ComponentMeta<typeof TextInputWithIcon>;

const Template: ComponentStory<typeof TextInputWithIcon> = (args) => (
  <TextInputWithIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  iconName: "Email",
  placeholder: "Email",
};

export const Fill = Template.bind({});
Fill.args = {
  iconName: "Email",
  value: "user1@example.com",
};
