import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Label as Component } from ".";

export default {
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Label = Template.bind({});
Label.args = {
  children: "Label",
};
