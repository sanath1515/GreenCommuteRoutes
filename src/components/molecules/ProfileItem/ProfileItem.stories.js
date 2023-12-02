import React from "react";

import ProfileItem from "./ProfileItem";


export default {
    title: "molecules/Account",
    component: ProfileItem,
};
const Template = (args) => <ProfileItem {...args} />;

export const PrimaryProfileDisplay = Template.bind({});


PrimaryProfileDisplay.args = {
    
};