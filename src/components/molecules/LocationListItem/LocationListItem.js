import React from "react";
import {
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import customtheme from "../../theme";
import { RoomOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',

  },
  typoStyle: {
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  outlinedIcon: {
    padding: "0px 0px 0px 20px",
    width: '24px', height: '24px', color: '#9bbdcb'
  },
}));


export default function LocationListItem({ locationName }) {

  const classes = useStyles();

  return (
    <ThemeProvider theme={customtheme}>
      <div className={classes.root} data-testid="divinlocationlistitem">
        <ListItem data-testid="lisiteminlocationlistitem">
          <ListItemIcon data-testid="listitemiconinlistitem">
            <RoomOutlined className={classes.outlinedIcon} data-testid="roominlocationlistitem" />
          </ListItemIcon>
          <Typography variant="subtitle1" className={classes.typoStyle} data-testid="locationnameinlocationlistitem">{locationName}</Typography>
        </ListItem>
      </div>
    </ThemeProvider>
  );
}