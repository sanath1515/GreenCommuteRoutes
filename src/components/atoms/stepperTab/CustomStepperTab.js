import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Step, Stepper, StepLabel, StepConnector } from '@material-ui/core';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import customtheme from '../../theme';


const QontoConnector = withStyles({
  active: {
    '& $line': {
      borderColor: '#ffffff',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#ffffff',
    },
  },
  line: {
    borderColor: '#ffffff',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  iconContainer: { 
    transform: 'scale(2)',
  },

}));

export default function HorizontalLinearStepper(props) {


  const steps = props.step;
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  return (
    <ThemeProvider theme={customtheme}>
      <div >
        <Stepper activeStep={activeStep} connector={<QontoConnector />}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps} data-testid="steplabel">{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
    </ThemeProvider>
  );
}