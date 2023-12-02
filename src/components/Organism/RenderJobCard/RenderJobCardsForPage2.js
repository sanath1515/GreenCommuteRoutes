import { Grid } from "@material-ui/core";
import React from "react";
import JobCard from "../../molecules/JobCard/JobCard";
import jobCardDetails from "./jobCardDetails";
import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsBusOutlinedIcon from '@material-ui/icons/DirectionsBusOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';

export function RenderJobCardsForPage2(props) {
    const jobsInFindJobs = jobCardDetails
    return (
        <Grid container direction="row">
            {jobsInFindJobs.map((item) => (
                <JobCard logo={item.logo} roleName={item.roleName} companyName={item.companyName} location={item.location} icons={[<LocalTaxiOutlinedIcon />, <TrainOutlinedIcon />, <DirectionsBusOutlinedIcon />, <MotorcycleOutlinedIcon />]} />
            ))
            }
        </Grid>
    );
}