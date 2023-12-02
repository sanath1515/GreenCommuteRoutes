import React from "react";

import JobCardSmall from "./JobCardSmall";

export default {
    title: "molecules/Job Card collapsed",
    component: JobCardSmall,
};

const Template = (args) => <JobCardSmall {...args} />;

export const PrimaryJobCardSmall = Template.bind({});


PrimaryJobCardSmall.args = {
    job:{
        logo : "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/4a211710-3383-49de-9edd-ef48e3af27d1-2x.png",
    roleName : 'User Experience Designer',
    companyName: 'Hp',
    location : 'Hyderabad, Telangana India',
    // icons : [<LocalTaxiOutlinedIcon />, <TrainOutlinedIcon /> , <DirectionsBusOutlinedIcon /> , <MotorcycleOutlinedIcon />]
    }
};