import React from "react";

import RightMap from "./RightMap";

export default {
    title: "organisms/JobTravelDetails",
    component: RightMap,
};
const Template = (args) => <RightMap {...args} />;

export const PrimaryRightMap = Template.bind({});


PrimaryRightMap.args = {
    imageSrc : "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/2e508859-1d7a-4f46-9144-a00288c0ac3f-3x.png",
    positionAppliedName : "User Experience Designer",
    companyName : "BMW",
    locationName : "Hitech City Telangana",
    mapImageSrc :"https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/d8a90ae4-9dc9-4d82-aed1-f9e36cd74089-2x.png",
    srcLocation : "East Marredpally Secunderabad",
    destLocation :  "Hitech City",
    TravelmapImageSrc : "images/map.png",
    TravelsrcLocation : "Marredpally",
    TraveldestLocation : "Hitech City",

};