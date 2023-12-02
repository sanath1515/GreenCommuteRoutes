import { ListItemIcon, makeStyles } from "@material-ui/core";
import React from "react";
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';


export default function IconInStorybook(props){
    const useStyles = makeStyles((theme) => ({
        root: {
            display : 'inline-flex',
            paddingLeft:'500px'
        },
        iconStyle:{        
            width: '24px',
            height: '24px',  
        },
    }));

    const classes = useStyles();
    return(
        <div className={classes.root}>
            <ListItemIcon>
                    <NotificationsOutlinedIcon className = { classes.iconStyle } style = {{ color:'#9bbdcb'}}/>
                </ListItemIcon>
        </div>
    );
}