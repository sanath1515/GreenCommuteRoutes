import React from "react";

import CustomTextField from "./CustomTextField";

export default {
  title: "molecules/Custom text field",
  component: CustomTextField,
};
const Template = (args) => <CustomTextField {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  locationPlaceholder : 'Enter your job location'
}
