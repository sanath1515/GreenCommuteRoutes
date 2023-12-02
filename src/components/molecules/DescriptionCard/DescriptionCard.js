import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import customtheme from '../../theme.jsx';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-flex',
        boxSizing: "borderBox",
        flexDirection: 'column',
        alignItems: 'left',
        marginLeft: '5px',
        paddingTop: "20px",
        paddingBottom: "20px"
    },
}));
const DescriptionCard = ({ head, body }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <ThemeProvider theme={customtheme} >
                <Typography variant="h2" data-testId='heading'>{head}</Typography>
                <Box p={1} bgcolor="background.paper">

                </Box>
                <Typography variant="h1" >{body}</Typography>
            </ThemeProvider>
        </Grid>
    )

}
export default DescriptionCard