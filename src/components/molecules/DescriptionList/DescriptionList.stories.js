import React from "react";

import DescriptionList from "./DescriptionList";

export default {
    title: "molecules/DescriptionList",
    component: DescriptionList,
};
const Template = (args) => <DescriptionList {...args} />;

export const PrimaryDesciptionList = Template.bind({});


PrimaryDesciptionList.args = {
   
    title: "What it takes",
    text: ["High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.","Excellent written and oral communication and presentation skills ","Excellent written and oral communication and presentation skills"],
};

