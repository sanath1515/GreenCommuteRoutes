import { Grid } from "@material-ui/core";
import React from "react";
import JobCardSmall from "../../molecules/JobCardsmall/JobCardSmall";
import jobCardDetails from "./jobCardDetails"

export function RenderJobCardsForPage3(props) {

    const jobsInFindJobs = jobCardDetails
    return (
        <Grid container spacing={8} direction="column">
            {jobsInFindJobs.map((item) => (
                <Grid item>
                    <JobCardSmall job={item} />
                </Grid>
            ))
            }
        </Grid>
    );
}