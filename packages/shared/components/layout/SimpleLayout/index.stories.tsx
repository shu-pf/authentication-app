import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SimpleLayout as Component } from ".";
import { DropDownNavigation } from "../../ui/DropDownNavigation/index.stories";
import { Anchor } from "../../ui";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const SimpleLayout = Template.bind({});
SimpleLayout.args = {
  children: <div>Main Content</div>,
  navigation: (
    // @ts-ignore argsに値を代入しているので未定義になるはずはないが、未定義と定義されてエラーになっている
    <DropDownNavigation {...DropDownNavigation.args}></DropDownNavigation>
  ),
  header: (
    <Anchor iconName="AngleLeft" href="#">
      Back
    </Anchor>
  ),
};
