import React from "react";

import Checkbox from "./TestingCheckbox";


export default {
  title: "atoms/TestCheckbox",
  component: Checkbox,
};
const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});