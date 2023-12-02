import React from "react";
import {RenderJobCardsForPage2} from './RenderJobCardsForPage2'

export default {
    title: "organisms/JobCards",
    component: RenderJobCardsForPage2,
};
const Template = (args) => <RenderJobCardsForPage2 {...args} />;



export const JobCardsDisplay = Template.bind({});

JobCardsDisplay.args = {
};
