import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header as Component } from ".";
import { DropDownNavigation } from "../../../ui/DropDownNavigation/index.stories";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Header = Template.bind({});
Header.args = {
  // @ts-ignore argsに値を代入しているので未定義になるはずはないが、未定義と定義されてエラーになっている
  navigation: <DropDownNavigation {...DropDownNavigation.args} />,
};
