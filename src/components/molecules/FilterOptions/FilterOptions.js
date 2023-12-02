
import React, {useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MyTypography from '../../atoms/MyTypography/MyTypography';
import ClearIcon from '@material-ui/icons/Clear';
import { Grid } from '@material-ui/core';
import customtheme from '../../theme.jsx';
import Mybutton from '../../atoms/button/CustomButton';

export default function FilterOptions({ selected }) {
  const useStyles = makeStyles((theme) => ({
    alignment: {
      display: 'flex',
      flexDirection: 'row',
      display: 'inline-block',
    },
    typographyHeaderStyle: {
      fontFamily: 'Montserrat',
      color: '#19293b',
      fontSize: '16px',
      lineHeight: 1.5,
      letterSpacing: '0.1px'
    },
    typographyParagraphStyle: {
      fontFamily: 'Montserrat',
      color: '#5ac568',
      fontSize: '14px',
      lineHeight: 1.57,
      letterSpacing: '0.1px',
      textAlign: 'left',
    },
    borderBox:
    {
      border: '2px solid #5ac568',
      borderRadius: '5px',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: '20px',
      marginTop: '10px',
      width: 'auto',
    },
    iconStyle:
    {
      width: '16px',
      height: '16px',
      color: '#5ac568',
    },
    clearButtonStyle:
    {
      fontFamily: 'Montserrat',
      fontSize: '14px',
      fontWeight: '600',
      fontstretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.29',
      letterSpacing: '0.2px',
    },
    clearStyle:
    {
      marginTop: '20px',

    },
  }));
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const [select, setSelect] = useState(selected);
  const getRemoved = () => {
    setSelect([]);
  }

  const getSelected = (e) => {
    let data = select;
    data = data.filter(item => JSON.stringify(item) !== JSON.stringify(e));
    setSelect(data);
  }
  const classes = useStyles();
  const len = selected.length;
  return (
    <div data-testid="divinfilter">
      <ThemeProvider theme={customtheme}>
        <Grid container spacing={3} >
          {select.map(data =>
            <Grid item  key={data}>
              <div className={classes.borderBox} >
                <MyTypography children={data} variant="h6" component="h5" className={classes.typographyParagraphStyle} />
                <Button value={data} onClick={() => getSelected(data)}><ClearIcon className={classes.iconStyle} /></Button>
              </div>
            </Grid>
          )}
          {len >= 1 && <Grid item style={{ marginTop: '10px' }} > <Mybutton text="clear all" color='secondary' onClick={getRemoved} />
          </Grid>}
        </Grid>
      </ThemeProvider>
    </div>

  )

}

