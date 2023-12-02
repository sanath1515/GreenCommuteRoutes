import React from "react";

import DescriptionCard from "./DescriptionCard";

export default {
    title: "molecules/DescriptionCard",
    component: DescriptionCard,
};
const Template = (args) => <DescriptionCard {...args} />;

export const PrimaryDesciptionCard = Template.bind({});


PrimaryDesciptionCard.args = {
   
    head: "Description",
    body : "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
};

export const SecondaryDesciptionCard = Template.bind({});


SecondaryDesciptionCard.args = {
   
    head: "What it takes",
    body : "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.",
};