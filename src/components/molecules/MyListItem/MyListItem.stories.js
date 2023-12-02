import React from "react";

import MyListItem from "./MyListItem";


export default {
    title: "molecules/SideNavbarTab",
    component: MyListItem,
};
const Template = (args) => <MyListItem {...args} />;

export const PrimaryListItem = Template.bind({});

