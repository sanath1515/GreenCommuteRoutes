import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import JobCardInfo from '../../molecules/JobCardInfo/JobCardInfo'

import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import MapCardInfo from '../../molecules/MapCardInfo/MapCardInfo';
import TravelInfoCard from "../../molecules/TravelInfoCard/TravelInfoCard";



const RightMap = ({ imageSrc, positionAppliedName, companyName, locationName, mapImageSrc, srcLocation, destLocation, TravelmapImageSrc, TravelsrcLocation, TraveldestLocation }) => {

  const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    columnAlignment: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '15px',
    },
    buttonStyle: {
      width: '101px',
      height: '38px',

    },
    buttonAlignment: {
      display: 'inline-flex',
      gap: '15px',
      paddingLeft: '70px',
    },
    buttonSave: {
      color: '#5ac568',
      backgroundColor: "white",
      borderRadius: '10px',
      border: '2px solid #5ac568',
      textTransform: 'none',
    },
    buttonApply: {
      backgroundColor: '#5ac568',
      color: "white",
      borderRadius: '10px',
      textTransform: 'none',
      fontWeight: 'bold'
    },
    buttonRoutes: {
      backgroundColor: '#5ac568',
      color: "white",
      borderRadius: '10px',
      textTransform: 'none',
      fontWeight: 'bold',
      border: '2px solid #5ac568',
      width: '208px',
      height: '50px',
      marginTop: '600px',

      position: "fixed",
      marginLeft: '100px'
    },
    paper: {
      maxWidth: 390,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
    mapStyles:
    {
      marginRight: 100,

    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.columnAlignment}>
      <Paper className={classes.paper}>
        <Grid container direction="column" wrap="nowrap" spacing={4}>
          <Grid item xs>
            <JobCardInfo positionAppliedName={positionAppliedName} companyName={companyName} locationName={locationName} imageSrc={imageSrc} />
          </Grid>
          <Divider />
          <Grid item xs>
            <MapCardInfo mapImageSrc={mapImageSrc}
              srcLocation={srcLocation}
              destLocation={destLocation} className={classes.mapStyles} />
          </Grid>
          <Divider />
          <Grid item xs>
            <TravelInfoCard
              mapImageSrc={TravelmapImageSrc}
              srcLocation={TravelsrcLocation}
              destLocation={TraveldestLocation}
            />
          </Grid>
          <Grid item xs>
            <div className={classes.buttonAlignment}>
              <Button className={` ${classes.buttonStyle} ${classes.buttonSave}`}   > Save</Button>
              <Button className={` ${classes.buttonStyle} ${classes.buttonApply}`} variant="contained"> Apply</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default RightMap;