import React from "react";

import {JobSearch} from './jobSearch'


export default {
    title: "Molecules/SearchBar",
    component: JobSearch,
};
const Template = (args) => <JobSearch {...args} />;

export const PrimaryProfileDisplay = Template.bind({});


PrimaryProfileDisplay.args = {
    width: '1050px'
};