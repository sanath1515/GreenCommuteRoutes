import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import customtheme from '../../theme.jsx';
const DescriptionList = ({ title, text }) => {
  const useStyles = makeStyles((theme) => ({

    root: {
      width: 390,
      filter: "blur(1px)",
    },

    listStyles:
    {
      paddingLeft: '20px',
    },
    mainRoot: {
      paddingTop: "20px"
    }
  }));


  const classes = useStyles();
  const noBlur = text.slice(0, text.length - 1);
  const blur = text[text.length - 1];
  return (
    <div className={classes.mainRoot} data-testid="divindescriptionlist">
      <ThemeProvider theme={customtheme}>
        <Typography variant="h2">{title}</Typography>
        <ul className={classes.listStyles} >
          {noBlur.map((bodyName) => (
            <li key={bodyName}><Typography variant="h1" data-testId='heading'>{bodyName}</Typography></li>
          ))}
        </ul>
        <div className={classes.root}>
          <ul className={classes.listStyles} >
            <li>
              <Typography variant="h1" component="h5"  >{blur}</Typography>
            </li>
          </ul>
        </div>
      </ThemeProvider>
    </div>
  )

}
export default DescriptionList


