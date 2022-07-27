import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logo } from ".";

export default {
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
