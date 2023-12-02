import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import SideNavBar from '../../Organism/SideNavBar/SideNavBar';
import TopNavigation from '../../Organism/TopNavigation/TopNavigation';
import JobCard from '../../molecules/JobCard/JobCard'
import { useDispatch, useSelector } from "react-redux";
import MyTypography from '../../atoms/MyTypography/MyTypography';
import { JobSearch } from '../../molecules/searchTab/jobSearch';
import FilterBox from '../../molecules/FilterBox/FilterBox';
import Mybutton from '../../atoms/button/CustomButton';
import { addTabToFilterOptions } from '../../../store/actions/actionsForFilterOptions';
import ClearIcon from '@material-ui/icons/Clear';

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

    const dispatch = useDispatch();
    const state = useSelector((state => state.jobs))
    const jobsInFindJobs = state.jobsInFindJobs
    const stateForFilterOptions = useSelector((state => state.showCheckedFilterOptions))
    const selected = stateForFilterOptions.tabsInFilterOptions
    let lengthForSelectedFilterOptions = selected.length;
    const classes = useStyles();

    const getRemoved = () => {
        dispatch(addTabToFilterOptions([]))
        lengthForSelectedFilterOptions = 0;
    }
    const getCleared = (e) => {
        let data = selected.tabsInFilterOptions;
        data = selected.tabsInFilterOptions.filter(item => JSON.stringify(item) !== JSON.stringify(e));
        dispatch(addTabToFilterOptions(data))
    }

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
                        <MyTypography variant="h4" component="h3" children="Find Jobs" />
                    </Grid>
                    <JobSearch width="1050px" />
                </Grid>
                <Grid container direction="row" style={{ paddingLeft: "60px" }}>
                    <Grid item xs={8} >
                        <Typography variant="h6" style={{ color: "#324552", paddingTop: "20px", paddingBottom: "5px", fontSize: "20px", fontFamily: "Montserrat", textAlign: "left" }}>
                            Recommend for you
                        </Typography>
                        <Typography variant="h1" style={{ paddingBottom: "20px", fontSize: "15px", fontFamily: "Montserrat", textAlign: "left", color: "grey" }}>
                            Based on your profile, skills and search history
                        </Typography>
                    </Grid>
                    <Grid item xs={3} style={{ paddingTop: "10px" }} direction="row" justifyContent="flex-end">
                        <FilterBox />
                    </Grid>
                    <Grid container direction="row">
                        <Grid item xs={7}>
                            <Grid container spacing={2} >
                                {selected.length > 0 && selected.map(data =>
                                    <Grid item key={data}>
                                        <div className={classes.borderBox} >
                                            <MyTypography children={data} variant="h6" component="h5" className={classes.typographyParagraphStyle} />
                                            <Button value={data} onClick={() => getCleared(data)}><ClearIcon className={classes.iconStyle} /></Button>
                                        </div>
                                    </Grid>
                                )
                                }
                            </Grid>
                        </Grid>
                        <Grid item style={{ marginTop: '12px', marginLeft: "0px" }} xs={2}>
                            {lengthForSelectedFilterOptions >= 1 && <Mybutton text="clear all" color='secondary' onClick={getRemoved} />}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing={0} xs={12} style={{ paddingLeft: "50px" }}>
                    {
                        jobsInFindJobs.map((item) => (
                            <JobCard job={item} />
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}