import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Header from "/Users/wooheebyun/Desktop/React-Storybook-Tutorials/storybook/src/components/Header/Header.js";

export default {
  title: "Header",
  component: Header,
};

export const HeaderTest = () => (
  <Header title="設定">設定を変更、その他情報を確認します。</Header>
);
