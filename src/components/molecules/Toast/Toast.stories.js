
import React from "react";

import CustomizedSnackbars from "./Toast";

export default {
  title: "molecules/Toast",
  component: CustomizedSnackbars,
};
const Template = (args) => <CustomizedSnackbars {...args} />;
export const Primary = Template.bind({});
