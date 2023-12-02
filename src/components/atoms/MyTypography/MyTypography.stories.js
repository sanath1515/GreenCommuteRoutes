import React from "react";

import MyTypography from "./MyTypography";

export default {
    title: "atoms/Typography",
    component: MyTypography,
};
const Template = (args) => <MyTypography {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    variant: "h4",
    component: "h3",
    children: "Recommended for you",
    
};



export const Secondary = Template.bind({});

Secondary.args = {
    component: "h3",
    children: "Find Jobs",
    styles: {
        fontSize: '16px',
        color: '#5ac568',
        fontFamily: 'Montserrat',
        lineHeight: '24px',
        letterSpacing: '0.1px',
    }
};
