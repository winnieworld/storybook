import React from "react";
import { action } from "@storybook/addon-actions";

import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import Button from "./Button.js";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
};
// for test

export const ButtonStory = {
  render: (args) => (
    <Button
      onClick={action("clicked")}
      Size={select("size", ["Nomal", "Big", "Medium"])}
      BgColor={select("bgColor", ["blue1", "white", "gray"])}
      label={text("label", "テキスト")}
      Disabled={boolean("disabled", false)}
    />
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cIhxJUV02ChHBTbIDz0DK6/%EC%9D%BC%EB%B3%B8%ED%96%A5-Ce-Fi-%EC%84%9C%EB%B9%84%EC%8A%A4(lendi)?type=design&node-id=8658%3A37843&mode=design&t=o4ba848FLrWTWi2s-1",
    },
  },
};

export const SmallButtonStory = {
  render: (args) => (
    <Button
      onClick={action("clicked")}
      Size={select("size", ["Nomal", "Small"])}
      BgColor={select("bgColor", ["blue2", "white", "gray"])}
      Icon={select("icon", ["none", "copy", "leftArrow", "rightArrow"])}
      label={text("label", "テキスト")}
      Disabled={boolean("disabled", false)}
    />
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cIhxJUV02ChHBTbIDz0DK6/%EC%9D%BC%EB%B3%B8%ED%96%A5-Ce-Fi-%EC%84%9C%EB%B9%84%EC%8A%A4(lendi)?type=design&node-id=8658%3A37843&mode=design&t=o4ba848FLrWTWi2s-1",
    },
  },
};
