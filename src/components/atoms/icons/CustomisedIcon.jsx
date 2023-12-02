import { makeStyles } from '@material-ui/styles';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    iconStyle: {
        width: width,
        height: height,
    }
}));


export default function CustomisedIcon({ icon, width, height }) {
    return (
        <div>
            {icon}
        </div>
    );
}