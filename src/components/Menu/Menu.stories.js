import React from "react";

import Menu from "/Users/wooheebyun/Desktop/React-Storybook-Tutorials/storybook/src/components/Menu/Menu.js";

export default {
  title: "Menu",
  component: Menu,
};

export const Title = () => <Menu type="title">設定</Menu>;
export const Item = () => <Menu type="item">通知設定</Menu>;
export const SelectedItem = () => (
  <Menu type="item" selected>
    通知設定
  </Menu>
);
