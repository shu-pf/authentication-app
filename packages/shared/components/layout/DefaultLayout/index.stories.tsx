import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DefaultLayout as Component } from ".";
import { DropDownNavigation } from "../../ui/DropDownNavigation/index.stories";
import { DefaultTitle } from "../parts/Title/Default";
import { BackTitle } from "../parts/Title/Back";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const DefaultLayout = Template.bind({});
DefaultLayout.args = {
  children: <div>Main Content</div>,
  navigation: (
    // @ts-ignore argsに値を代入しているので未定義になるはずはないが、未定義と定義されてエラーになっている
    <DropDownNavigation {...DropDownNavigation.args}></DropDownNavigation>
  ),
  header: (
    <DefaultTitle
      title="Personal info"
      subTitle="Basic info, like your name and photo"
    ></DefaultTitle>
  ),
};

export const RouterBack = Template.bind({});
RouterBack.args = {
  children: <div>Main Content</div>,
  navigation: (
    // @ts-ignore argsに値を代入しているので未定義になるはずはないが、未定義と定義されてエラーになっている
    <DropDownNavigation {...DropDownNavigation.args}></DropDownNavigation>
  ),
  header: <BackTitle></BackTitle>,
};
