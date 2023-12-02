import React from 'react'
import { ListItem, ListItemIcon, ListItemText, ThemeProvider, Grid, makeStyles, Typography } from '@material-ui/core';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import customtheme from '../../theme';


const useStyles = makeStyles((theme) => ({
  selectedItemStyle: {
    backgroundColor: 'rgba(90, 197, 104, 0.15)',
    borderRadius: '10px',
    height: '50px',
    width: '240px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 10px',
    cursor: 'pointer',
  },
  selectedIcon: {
    color: '#5ac568',
    width: '24px',
    height: '24px',
  },
  selectedTypographyStyle: {
    fontSize: '16px',
    color: '#5ac568',
    fontFamily: 'Montserrat',
    lineHeight: '24px',
    letterSpacing: '0.1px',
  },
}));


export default function MyListItem(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={customtheme}>
      <Grid direction="column" container className={classes.selectedItemStyle} data-testid="divinmylistitem">
        <ListItem data-testid="listiteminmylistitem">
          <ListItemIcon data-testid="listitemiconinlistitem">
            <TurnedInNotOutlinedIcon className={classes.selectedIcon} />
          </ListItemIcon>
          <ListItemText data-testid="listitemtextinlistitem" primary={<Typography variant="subtitle1" className={classes.selectedTypographyStyle}>{"Saved Jobs"}</Typography>} />
        </ListItem>
      </Grid>
    </ThemeProvider>
  );
}