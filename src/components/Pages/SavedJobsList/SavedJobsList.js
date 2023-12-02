import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import SideNavBar from '../../Organism/SideNavBar/SideNavBar';
import TopNavigation from '../../Organism/TopNavigation/TopNavigation';
import { useSelector } from "react-redux";
import MyTypography from '../../atoms/MyTypography/MyTypography';
import JobCardForSavedJob from '../../molecules/JobCard/JobCardForSavedJob';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",

    },
    formControl: {
        margin: theme.spacing(3),
    },
    buttonPadding: {
        paddingRight: '10px'
    },
    filterButtonStyle: {
        backgroundColor: '#e3f3f6',
        textTransform: 'none',
        marginLeft: '540px',
        marginTop: '20px',
    },
    filterTextOptions: {
        fontWeight: 'normal',
        fontSize: '14px',
        fontFamily: "Montserrat",
    },
    filterHeaders: {
        fontSize: '14px',
        fontWeight: '600',
        color: '#19293b',
        fontFamily: "Montserrat",
    },
    dialogBox: {
        width: '625px',
        height: '426px',
        objectFit: 'contain',
    },
    checkBox: {
        width: 10,
        height: 10,
    },
    closeIcon: {
        width: '24px',
        height: '24px',
    },
    topAlignment:
    {
        marginTop: '500px',
    },
    alignment: {
        display: 'flex',
        flexDirection: 'row',
        display: 'inline-block',
    },

    typographyHeaderStyle: {
        fontFamily: 'Montserrat',
        color: '#19293b',
        fontSize: '16px',
        lineHeight: 1.5,
        letterSpacing: '0.1px'
    },
    typographyParagraphStyle: {
        fontFamily: 'Montserrat',
        color: '#5ac568',
        fontSize: '14px',
        lineHeight: 1.57,
        letterSpacing: '0.1px',
        textAlign: 'left',

    },
    borderBox:
    {
        border: '2px solid #5ac568',
        borderRadius: '5px',
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '20px',
        marginTop: '10px',
        width: 'auto',
    },
    iconStyle:
    {
        width: '16px',
        height: '16px',
        color: '#5ac568',
    },
    clearButtonStyle:
    {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: '600',
        fontstretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.29',
        letterSpacing: '0.2px',
    },
    clearStyle:
    {
        marginLeft: '550px',
    },
    dialogStyle:
    {
        marginTop: '150px',
        marginLeft: '5px',
        marginRight: '12px',

    }
}));

export default function SearchJobPage() {
    const stateForRenderingCardsInSearchJob = useSelector((state) => { return state.jobs })
    const jobsInSavedJobs = stateForRenderingCardsInSearchJob.jobsInSavedJobs
    const selectedPlace = useSelector((state => state.showYourLocation))

    return (
        <Grid container direction="row">
            <Grid item xs={2}>
                <SideNavBar />
            </Grid>
            <Grid item xs={10} style={{ paddingLeft: "30px" }}>
                <Grid item style={{ width: "100%" }}>
                    <TopNavigation locationName={selectedPlace.currentLocation} />
                </Grid>
                <Grid style={{ paddingLeft: "60px" }}>
                    <Grid style={{ paddingTop: '20px', paddingBottom: '15px' }}>
                        <MyTypography variant="h4" component="h3" children="Saved Jobs" />
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing={0} xs={12} style={{ paddingLeft: "50px" }}>
                    {
                        jobsInSavedJobs.map((item) => (
                            <JobCardForSavedJob job={item} />
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}