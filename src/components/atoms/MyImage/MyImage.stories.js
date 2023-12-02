import React from "react";

import MyImage from "./MyImage";

export default {
    title: "atoms/Image",
    component: MyImage,
};
const Template = (args) => <MyImage {...args} />;

export const SmallIconStyle = Template.bind({});

SmallIconStyle.args = {
    src:"https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/0ce44de0-cb86-42bc-9f88-642386ab17d1.svg",
    height:"40px",
    width:"40px",
    alt: "An Image"
};

export const MediumIconStyle = Template.bind({});

MediumIconStyle.args = {
    src:"https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/2e508859-1d7a-4f46-9144-a00288c0ac3f-3x.png",
    height:"50px",
    width:"50px",
     alt: "An Image"
};


export const PrimaryImageMap = Template.bind({});

PrimaryImageMap.args = {
    src:"https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/d8a90ae4-9dc9-4d82-aed1-f9e36cd74089-2x.png",
    height:"150px",
    width:"350px",
    alt: "An Image"
};

export const ImageMapShade = Template.bind({});

ImageMapShade.args = {
    ...PrimaryImageMap.args,
    styles : {
        boxShadow: '0px 6px 5px #ccc',
        borderRadius : "10px"
    }
};