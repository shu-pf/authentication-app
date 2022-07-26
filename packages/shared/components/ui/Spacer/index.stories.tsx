import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Spacer } from ".";

export default {
  component: Spacer,
  argTypes: {},
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args) => (
  <>
    <div>要素1</div>
    <Spacer {...args} />
    <div>要素2</div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  height: "30px",
};
