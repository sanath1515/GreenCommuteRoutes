import React from "react";

import Mybutton from "./CustomButton";

import { action } from "@storybook/addon-actions";


export default {
  title: "atoms/Button",
  component: Mybutton,
};
const Template = (args) => <Mybutton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: {
    options: ["Primary", "Secondary"],
    control: {type: 'radio'}
  },
  color: {
    options: ["primary", "secondary"],
    control: {type: 'radio'}
  },
  variant: {
    options: ["contained", "outlined"],
    control: {type: 'radio'}
  },
  click: action("primary clicked"),
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   text: "ghijdfguhnjmkcfvghjky",
//   color: "secondary",
//   variant: "contained",
//   click: action("secondary clicked"),
// };
