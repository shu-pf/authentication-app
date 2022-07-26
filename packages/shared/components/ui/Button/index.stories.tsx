import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

export default {
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Start coding now",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Edit",
  width: "95px",
};
