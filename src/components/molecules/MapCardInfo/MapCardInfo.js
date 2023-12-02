import React from "react";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MyImage from '../../atoms/MyImage/MyImage';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Grid, Typography } from "@material-ui/core";
import customtheme from "../../theme";
import clsx from "clsx";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { RoomOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-flex',
        width: '390px',
        flexDirection: 'column',
        alignItems: 'left',
        marginLeft: '30px',
    },
    headerDiv: {
        display: 'inline-flex',
        flexDirection: 'row',
        gap: '10px',
    },
    imageDiv: {
        padding: '5% 5% 5% 0',
    },
    listItemDiv: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '330px'
    },
    innerListItemDiv: {
        display: 'inline-flex',
        alignItems: 'center',
        width: '330px',
        height: '50px',
        borderRadius: '10px',
    },
    innerListItemDivStyling: {
        backgroundColor: '#e3f3f6',
        borderRadius: '10px',
    },
    typographyHeaderStyle: {
        color: '#19293b',
    },
    hide: {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    srcLocationDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '2% 5% 3% 5%'
    },
    locationTypo: {
        paddingLeft: '8px',
        color: '#19293b',
    },
    subtitle22: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.29,
        letterSpacing: '0.1px',
    },
    backArrowOutlinedIcon: {
        width: '24px',
        height: '24px',
        marginTop: '0px 8px 20px 30px',
    },
    closedOutlinedIcon: {
        margin: '0 0 0 10px',
        width: '24px', height: '24px', color: '#9bbdcb'
    },
    outlinedIcon: {
        padding: "0px 0px 0px 20px",
        width: '24px', height: '24px', color: '#9bbdcb'
    },
    circleIcon: {
        width: '16px',
        height: '24px',
        marginRight: '8px'
    },
    locationOutlinedIcon: {
        width: '16px',
        height: '24px',
        color: '#324552',
        marginRight: '8px'
    }
}));

export default function JobCardInfo({ mapImageSrc, srcLocation, destLocation }) {
    const classes = useStyles();

    return (
        <ThemeProvider theme={customtheme}>
            <Grid className={classes.root} data-testid="maingridinmapcard">
                <Grid className={classes.headerDiv} data-testid="firsgridinmapcard">
                    <ArrowBackIcon className={classes.backArrowOutlinedIcon} data-testid="arrowbackinmapcard" />
                    <Typography variant="subtitle1" data-testid="commuteroutesinmapcard">Commute Routes</Typography>
                </Grid>
                <Grid className={classes.imageDiv} data-testid="2fridinmapcard">
                    <MyImage src={mapImageSrc} height="135.2px" width="330px" alt="Map Directions" data-testid="myimageinmapcard" />
                </Grid>
                <Grid className={classes.listItemDiv} data-testid="3rdgridinmapcard">
                    <Grid className={clsx(classes.innerListItemDiv, { [classes.innerListItemDivStyling]: true })} data-testid="fourthgridinmapcard">
                        <Grid className={clsx(classes.srcLocationDiv, { [classes.hide]: true })} data-testid="5thgridinmapcard">
                            <FiberManualRecordIcon className={classes.circleIcon} data-testid="manualinmapcard" />
                            <Typography noWrap className={clsx(classes.locationTypo, { [classes.subtitle22]: true })} data-testid="srclocationinmapcard">{srcLocation}</Typography>
                            <CloseIcon className={classes.closedOutlinedIcon} data-testid="closeinmapcard" />
                        </Grid>
                    </Grid>
                    <Grid className={clsx(classes.innerListItemDiv, { [classes.innerListItemDivStyling]: true })} data-testid="6thgridinmapcard">
                        <Grid className={clsx(classes.srcLocationDiv, { [classes.hide]: true })} data-testid="7thgridinmapcard">
                            <RoomOutlined className={classes.locationOutlinedIcon} data-testid="roominmapcard" />
                            <Typography noWrap className={clsx(classes.locationTypo, { [classes.subtitle22]: true })} data-testid="destlocationinmapcard">{destLocation}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}