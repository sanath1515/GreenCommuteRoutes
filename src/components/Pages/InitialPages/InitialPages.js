import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import AQI from "../../molecules/aqi/aqi";
import HorizontalLinearStepper from "../../molecules/stepper/CustomStepper";
import { useDispatch, useSelector } from "react-redux";
import { assignJobCardDetails } from "../../../store/actions/actions";

const useStyles = makeStyles((theme) => ({
    leftGrid: {
        width: '890px',
        height: '900px',
        paddingLeft: "50px",

    },
    rightGrid: {
        width: '50%',
        height: '900px',
        paddingTop: '300px',
        backgroundColor: '#e7fce0'
    }
}));

const LocationPrimary = {
    text: "Enter location to know Time Air Quality Index (AQI)",
    imgPath: "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/ae5e266d-f03e-4732-af5b-a8ebdac94494.svg",
    isNumber: false,
    count: "",
    isNumberTag: false,
    numberTag: "",
    textSize: "26px",
    color: "#19293b",
}
export default function Page1(props) {
    const dispatch = useDispatch();
    console.log(process.env.REACT_CLIENT_URL);
    useEffect(() => {
        fetch(process.env.REACT_CLIENT_URL).then((res) => res.json()).then(res => {
            dispatch(assignJobCardDetails(res))
        })
    }, [])
    const classes = useStyles();
    const stepper = useSelector((state => state.ShowStepper))
    const selectedPlace = useSelector((state => state.showYourLocation))
    const skills = useSelector((state => state.showSkills));
    const jobPlace = useSelector((state => state.showJobLocation));
    const jobCount = 117 * skills.activeSkills.length;
    return (
        <div>
            <Grid container direction='row'>
                <Grid item className={classes.leftGrid}>
                    <HorizontalLinearStepper steps={['Your Location', 'Job Location', 'Your Skills']} />
                </Grid>

                <Grid item className={classes.rightGrid}>
                    {stepper.activeStepper == 0 && selectedPlace.currentLocation.length == 0 && <AQI text="Enter location to know Time Air Quality Index (AQI)"
                        imgPath="https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/ae5e266d-f03e-4732-af5b-a8ebdac94494.svg"
                        isNumber="false"
                        count=""
                        isNumberTag="false"
                        numberTag=""
                        textSize="26px"
                        color="#19293b" />
                    }
                    {stepper.activeStepper == 0 && selectedPlace.currentLocation.length > 0 && <AQI text="Enter location to know Time Air Quality Index (AQI)"
                        imgPath="https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/ae5e266d-f03e-4732-af5b-a8ebdac94494.svg"
                        isNumber="true"
                        count="896"
                        isNumberTag="false"
                        numberTag=""
                        textSize="26px"
                        color="#19293b" />
                    }
                    {stepper.activeStepper == 1 && jobPlace.jobLocation.length == 0 && <AQI text="Enter location to know Time Air Quality Index (AQI)"
                        imgPath="https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/b7d255bc-324e-48a6-84ab-c0c15a18b17f.svg"
                        isNumber="false"
                        count=""
                        isNumberTag="false"
                        numberTag=""
                        textSize="26px"
                        color="#19293b" />
                    }
                    {
                        stepper.activeStepper == 2 && skills.activeSkills.length == 0 && <AQI
                            text="Enter your skills to know how many jobs are in this location"
                            imgPath="https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/8521819a-569c-4bbe-91d4-71a6d7a77c05.svg"
                            isNumber="false"
                            count=""
                            isNumberTag="false"
                            numberTag=""
                            textSize="26px"
                            countSize="100px"
                            color="#19293b" />
                    }

                    {stepper.activeStepper == 1 && jobPlace.jobLocation.length > 0 && <AQI
                        text="Enter location to know Time Air Quality Index (AQI)"
                        imgPath="https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/b7d255bc-324e-48a6-84ab-c0c15a18b17f.svg"
                        isNumber="true"
                        count="953"
                        isNumberTag="true"
                        numberTag={jobPlace.jobLocation}
                        textSize="26px"
                        countSize="100px"
                        numberTagSize="26px"
                        color="#19293b" />
                    }
                    {stepper.activeStepper == 2 && skills.activeSkills.length > 0 && <AQI
                        text="Jobs found in these locations"
                        imgPath="https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/8521819a-569c-4bbe-91d4-71a6d7a77c05.svg"
                        isNumber="true"
                        count={jobCount}
                        isNumberTag="false"
                        numberTag=""
                        textSize="26px"
                        countSize="100px"
                        color="#19293b"
                    />

                    }
                </Grid>
            </Grid>
        </div>
    );
}
