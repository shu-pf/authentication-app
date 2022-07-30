import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DropDownNavigation as Component, DropDownContainer } from ".";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

export const DropDownNavigation: ComponentStory<typeof Component> = (args) => (
  <Component userName="Xanthe Neal">
    <DropDownContainer>テスト</DropDownContainer>
  </Component>
);
