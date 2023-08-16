import React from "react";
import Button from "/Users/wooheebyun/Desktop/React-Storybook-Tutorials/storybook/src/components/Button/Button.js";

export default {
  title: "Button",
  component: Button,
};
const Template = (args) => <Button {...args} />;
export const Nomal = () => Template.bind({});
Nomal.args = {
  lable: "￥で見る",
};
export const WithIcon = () => (
  <Button>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.2191 8.00047L10.519 11.3003L9.57616 12.2431L5.3335 8.00047L9.57616 3.75781L10.519 4.70062L7.2191 8.00047Z"
        fill="white"
      />
    </svg>
    以前のページへ
  </Button>
);
