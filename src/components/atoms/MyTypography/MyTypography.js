import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: '20px',
        color: '#324552',
        fontFamily: 'Montserrat',
        lineHeight: '26px',
        letterSpacing: '0.2px',
        fontWeight: 'bold'
    }
}))

const MyTypography = ({ children, ...rest }) => {
    const classes = useStyles();
    return (
        <Typography data-testid="typographyComponent" className={classes.root} {...rest}> {children} </Typography>
    );
}

export default MyTypography
