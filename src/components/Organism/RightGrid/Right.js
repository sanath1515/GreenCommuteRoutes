import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import JobCardInfo from '../../molecules/JobCardInfo/JobCardInfo'
import { Snackbar, SnackbarContent, ThemeProvider } from '@material-ui/core'
import DescriptionCard from '../../molecules/DescriptionCard/DescriptionCard';
import DescriptionList from '../../molecules/DescriptionList/DescriptionList';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import customtheme from "../../theme";
import { useDispatch } from "react-redux";
import { savedJob, unsaveJob } from "../../../store/actions/actions";
import CustomizedSnackbars from "../../molecules/Toast/Toast";
import RightMap from '../RightMapGrid/RightMap'

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
    paddingTop: '10px',
    paddingBottom: '25px'
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
  },
  paper: {
    maxWidth: 390,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },

  buttonGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));


export default function Right({ job, buttonLabel }) {
  const logo = job.logo
  const roleName = job.roleName
  const companyName = job.companyName
  const locationName = job.locationName
  const imageSrc = job.imageSrc
  const head = job.head
  const body = job.body
  const title = job.title
  const text = job.text
  const [labelToBeShown, setLabelToBeShown] = useState(buttonLabel)

  const dispatch = useDispatch();

  const showToastMessageForApplyOperation = () => {
    {
      <CustomizedSnackbars label="Job Applied" />
    };
  }

  const [toastButtonState, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = toastButtonState;
  const [message, setMessage] = useState("Job Saved")

  const handleClick = (newState) => () => {
    if (labelToBeShown === "Save") {
      dispatch(savedJob(job))
      setMessage("Job Saved")
      setLabelToBeShown('Unsave')
    }
    else if (labelToBeShown === "Unsave") {
      dispatch(unsaveJob(job))
      setMessage("Job Unsaved")
      setLabelToBeShown('Save')
    }
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...toastButtonState, open: false });
  };

  const [rightflag, setRightflag] = useState(true);
  const handleChange = () => {
    setRightflag(false);
  }
  const classes = useStyles();
  return (
    <ThemeProvider theme={customtheme}>
      {rightflag != false && <div className={classes.columnAlignment}  >
        <Paper className={classes.paper}>
          <Grid data-testid='main' container wrap="nowrap" direction="column" spacing={3} >
            <Grid item xs>
              <JobCardInfo positionAppliedName={roleName} companyName={companyName} locationName={locationName} imageSrc={imageSrc} />
              <div className={classes.buttonAlignment}>
                <Button data-testid='button' className={` ${classes.buttonStyle} ${classes.buttonSave}`} onClick={handleClick({ vertical: 'top', horizontal: 'center' })} > {labelToBeShown} </Button>
                <Button data-testid='Applybutton' className={` ${classes.buttonStyle} ${classes.buttonApply}`} variant="contained" onClick={() => { showToastMessageForApplyOperation() }}> Apply</Button>
              </div>
            </Grid>
            <Divider data-testid='divider' />
            <Grid item xs>
              <DescriptionCard head={head} body={body} />
            </Grid>
            <Divider />
            <Grid item xs className={classes.descriptionGrid}>
              <DescriptionList title={title} text={text} />
            </Grid>
            <Grid item xs className={classes.buttonGrid}>
              <Button className={`  ${classes.buttonRoutes}`} variant="contained" onClick={handleChange}> Green Commute Routes</Button>
            </Grid>
          </Grid>
        </Paper>

        <Grid>
          {
            open &&
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              key={vertical + horizontal} autoHideDuration={1000}>
              <SnackbarContent style={{
                backgroundColor: "#5ac568",
              }}
                message={<span id="client-snackbar">{message}</span>}
              />
            </Snackbar>
          }
        </Grid>
      </div>}
      {rightflag == false && <React.Fragment>
        <RightMap
          imageSrc={imageSrc}
          positionAppliedName={roleName}
          companyName={companyName}
          locationName={locationName}
          mapImageSrc={"https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/d8a90ae4-9dc9-4d82-aed1-f9e36cd74089-2x.png"}
          srcLocation={"East Marredpally Secunderabad"}
          destLocation={"Hitech City"}
          TravelmapImageSrc={"images/map.png"}
          TravelsrcLocation={"Marredpally"}
          TraveldestLocation={"Hitech City"}
        />
      </React.Fragment>
      }
    </ThemeProvider>

  );
}