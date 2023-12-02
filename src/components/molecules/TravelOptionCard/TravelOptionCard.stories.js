import React from "react";

import TravelOptionCard from "./TravelOptionCard";

export default {
    title: "molecules/CabOptions",
    component: TravelOptionCard,
};
const Template = (args) => <TravelOptionCard {...args} />;

export const PrimaryTravelOptionCard = Template.bind({});

PrimaryTravelOptionCard.args = {
    imageSrc : 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Ola_Cabs_logo.svg/1200px-Ola_Cabs_logo.svg.png',
    cabServiceName : "Ola",
    costEstimation : "Approx Rs. 65"
};

export const SecondaryTravelOptionCard = Template.bind({});

SecondaryTravelOptionCard.args = {
    imageSrc : 'https://130e178e8f8ba617604b-8aedd782b7d22cfe0d1146da69a52436.ssl.cf1.rackcdn.com/ubers-british-breach-tally-27-million-victims-showcase_image-3-a-10491.jpg',
    cabServiceName : "Uber",
    costEstimation : "Approx Rs. 65"
}
