import React from "react";
import SideNavBar from './SideNavBar'

export default {
    title: "organisms/GreenCommuteOptions",
    component: SideNavBar,
};
const Template = (args) => <SideNavBar {...args} />;



export const SideNavPrimary = Template.bind({});

SideNavPrimary.args = {
    selectedIndex: 0,
    typographyDivStyle : {
        padding : '10px',
        justifyContent : 'center',
    }
};
