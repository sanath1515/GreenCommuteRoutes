import React from "react";

import LocationListItem from "./LocationListItem";

export default {
    title: "molecules/LocationDisplay",
    component: LocationListItem,
};
const Template = (args) => <LocationListItem {...args} />;

export const PrimaryLocation = Template.bind({});


PrimaryLocation.args = {
    locationName : 'East Marredpally, Secunderabad'
};