import React from "react";

import MapCardInfo from "./MapCardInfo";

export default {
    title: "molecules/MapDisplay",
    component: MapCardInfo,
};
const Template = (args) => <MapCardInfo {...args} />;

export const PrimaryMapCardInfo = Template.bind({});


PrimaryMapCardInfo.args = {
    mapImageSrc : 'https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/d8a90ae4-9dc9-4d82-aed1-f9e36cd74089-2x.png',
    srcLocation : "East Marredpally Secunderabad",
    destLocation : "Hitech City",
};