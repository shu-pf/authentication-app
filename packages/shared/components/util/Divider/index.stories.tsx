import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Divider as Component } from ".";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <>
    <div>要素1</div>
    <Component {...args} />
    <div>要素2</div>
  </>
);

export const Divider = Template.bind({});
