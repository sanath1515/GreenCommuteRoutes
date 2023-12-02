import React from "react";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import MyImage from '../../atoms/MyImage/MyImage';
import customtheme from "../../theme";
import { Button, Grid, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-flex',
        width: '330px',
        height: '60px',
        flexDirection: 'row',
        alignItems: 'center',
    },
    alignStart: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '200px'
    },
    alignLast: {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '130px',
        height: '60px'
    },
    cardDetailsDisplay: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10% 10% 2% 3%',
        paddingTop: '0',
        gap: '4px'
    },
    typographyParagraphStyle: {
        fontFamily: 'Montserrat',
        color: '#5f7381',
        fontSize: '12px',
        lineHeight: 1.33,
        letterSpacing: '0.1px'
    },
    typographyBookNow: {
        color: '#5ac568',
        fontSize: '14px',
        alignItems: 'right',
        fontWeight: 600,
        fontFamily: 'Montserrat',
        float: 'right'
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
    caption32: {
        fontFamily: 'Montserrat',
        fontSize: '12px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.6,
        letterSpacing: '0.2px',
        color: grey[400]
    },
}));

export default function JobCardInfo({ cabServiceName, costEstimation, imageSrc }) {

    const classes = useStyles();

    return (
        <ThemeProvider theme={customtheme}>
            <Grid className={classes.root} data-testid="maingridintraveloptioncard" >
                <Grid className={classes.alignStart} data-testid="secondgridintraveloptioncard" >
                    <Grid data-testid="thirdgridintraveloptioncard" >
                        <MyImage src={imageSrc} height="60px" width="60px" alt={cabServiceName} />
                    </Grid>
                    <Grid className={classes.cardDetailsDisplay} data-testid="fourthgridintraveloptioncard">
                        <Typography className={classes.subtitle22}>{cabServiceName}</Typography>
                        <Typography className={classes.caption32} variant="caption">{costEstimation}</Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.alignLast} data-testid="fifthgridintraveloptioncard">
                    <Button><Typography variant="body2" style={{ color: '#5ac568' }} data-testid="typographyintraveloptioncard"> Book Now </Typography></Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}