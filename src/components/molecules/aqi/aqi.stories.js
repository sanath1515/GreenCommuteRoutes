import React from 'react';
import AQI from './aqi';

export default {
    title: "molecules/ScreenForAirQualityIndex",
    component: AQI,
    argTypes:{
        color: {control: 'color'},
    },
};
const Template = (args) => <AQI {...args} />;

export const LocationPrimary = Template.bind({});
LocationPrimary.args = {
    text: "Enter location to know Time Air Quality Index (AQI)",
    imgPath: "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/ae5e266d-f03e-4732-af5b-a8ebdac94494.svg",
    isNumber: false,
    count:"",
    isNumberTag:false,
    numberTag:"",
    textSize:"26px",
    color:"#19293b",
};

export const LocationSecondary = Template.bind({});
LocationSecondary.args = {
    text: "Real - Time Air Quality Index (AQI) in this location",
    imgPath: "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/b7d255bc-324e-48a6-84ab-c0c15a18b17f.svg",
    isNumber: true,
    count:"894",
    isNumberTag:true,
    numberTag:"Mumbai",
    textSize:"20px",
    countSize: "100px",
    numberTagSize: "26px",
    color:"#19293b",
};


export const SkillsPrimary = Template.bind({});
SkillsPrimary.args = {
    text: "Enter location to know Time Air Quality Index (AQI)",
    imgPath: "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/8521819a-569c-4bbe-91d4-71a6d7a77c05.svg",
    isNumber: true,
    count:"953",
    isNumberTag:false,
    numberTag:"",
    textSize:"20px",
    countSize: "100px",
    color:"#19293b",
};

