import React from 'react';
import HorizontalLinearStepper from './CustomStepper';

export default {
    title: "molecules/Stepper",
    component: HorizontalLinearStepper,
};
const Template = (args) => <HorizontalLinearStepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    steps: ['Your Location', 'Job Location', 'Your Skills'],
};