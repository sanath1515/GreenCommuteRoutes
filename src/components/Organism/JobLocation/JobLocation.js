import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Stepper from "../../molecules/stepper/CustomStepper";

const useStyles = makeStyles((theme) => ({
    leftGrid: {
        width: '890px',
        height: '900px',
        paddingLeft: "50px",

    },
    rightGrid: {
        width: '50%',
        height: '900px',
        backgroundColor: '#e7fce0'
    }
}));

const LocationPrimary = {
    text: "Enter location to know Time Air Quality Index (AQI)",
    imgPath: "yourLocation.png",
    isNumber: false,
    count: "",
    isNumberTag: false,
    numberTag: "",
    textSize: "26px",
    color: "#19293b",
}

export default function JobLocation() {
    const classes = useStyles();
    return (
        <div data-testid="topNavigation">
            <Grid data-testid="grid" container direction='row' >
                <Grid item className={classes.leftGrid}>
                    <Stepper steps={['Your Location', 'Job Location', 'Your Skills']} />
                </Grid>
            </Grid>
        </div>
    );
}
