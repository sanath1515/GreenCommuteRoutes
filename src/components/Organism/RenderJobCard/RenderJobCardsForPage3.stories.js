import React from "react";
import {RenderJobCardsForPage3} from './RenderJobCardsForPage3'

export default {
    title: "organisms/JobsList",
    component: RenderJobCardsForPage3,
};
const Template = (args) => <RenderJobCardsForPage3 {...args} />;



export const JobDescriptionDisplay = Template.bind({});

JobDescriptionDisplay.args = {
};
