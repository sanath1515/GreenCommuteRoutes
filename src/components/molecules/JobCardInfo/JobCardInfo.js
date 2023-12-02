import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MyTypography from "../../atoms/MyTypography/MyTypography";
import MyImage from '../../atoms/MyImage/MyImage';
import customtheme from '../../theme.jsx';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

const JobCardInfo = ({ positionAppliedName, companyName, locationName, imageSrc }) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'inline-flex',
            width: '390px',
            flexDirection: 'row',
            marginLeft: '30px',
        },
        cardDetailsDisplay: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 3% 3% 5%',
            paddingTop: '0',
            gap: '4px'
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
            color: '#5f7381',
            fontSize: '12px',
            lineHeight: 1.33,
            letterSpacing: '0.1px'
        }

    }));

    const classes = useStyles();

    return (
        <Grid className={classes.root} data-testid="maindivinjobinfo">
            <ThemeProvider theme={customtheme}>
                <div data-testid="firstdivinjobinfo">
                    <MyImage src={imageSrc} height="50px" width="50px" alt={companyName} />
                </div>
                <div className={classes.cardDetailsDisplay} data-testid="seconddivinjobinfo">
                    <Typography variant="h2" data-testid="positiontypographyinjobinfo">{positionAppliedName}</Typography>
                    <Typography variant="h4" data-testid="companytypographyinjobinfo">{companyName}</Typography>
                    <Typography variant="h4" data-testid="locationtypographyinjobinfo">{locationName}</Typography>
                </div>
            </ThemeProvider>
        </Grid>
    );
}

export default JobCardInfo;