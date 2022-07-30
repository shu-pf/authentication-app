import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Spacer as Component } from ".";

export default {
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <>
    <div>要素1</div>
    <Component {...args} />
    <div>要素2</div>
  </>
);

export const Spacer = Template.bind({});
Spacer.args = {
  height: "30px",
};
