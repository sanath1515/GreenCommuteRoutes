import React from "react";

import JobCardInfo from "./JobCardInfo";

export default {
    title: "molecules/Job Card Info",
    component: JobCardInfo,
};
const Template = (args) => <JobCardInfo {...args} />;

export const PrimaryJobCardInfo = Template.bind({});


PrimaryJobCardInfo.args = {
    imageSrc : 'https://logosvector.net/wp-content/uploads/2016/05/hp-logo-vector-download.jpg',
    positionAppliedName : "User Experience Designer",
    companyName : "BMW",
    locationName : "Hitech City Telangana"
};

//bmw https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png
//microchip https://www.logolynx.com/images/logolynx/s_06/06968148ae0a9bd8f0990b0e6e332130.png
