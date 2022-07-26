import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Flex } from ".";
import { IconButton } from "../IconButton";

export default {
  component: Flex,
  argTypes: {},
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <IconButton iconName="Google" />
    <IconButton iconName="Facebook" />
    <IconButton iconName="Twitter" />
    <IconButton iconName="Github" />
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  gap: "20px",
};
