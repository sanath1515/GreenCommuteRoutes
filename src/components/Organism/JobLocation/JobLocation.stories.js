import React from "react";

import JobLocation from "./JobLocation";

import { action } from "@storybook/addon-actions";


export default {
  title: "organisms/CustomStepper",
  component: JobLocation,
};
const Template = (args) => <JobLocation {...args} />;

export const Primary = Template.bind({});
