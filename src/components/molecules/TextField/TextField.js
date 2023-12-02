/* eslint-disable no-use-before-define */
import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from '@material-ui/core';
import Aqi from '../aqi/aqi';
import Typography from '@material-ui/core/Typography';
import customtheme from '../../theme.jsx';
import { ThemeProvider } from '@material-ui/core/styles';

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')`
  width: 500px;
  height: 60px;
  margin: 20px 210px 0px 80px;
  border: 1.5px solid #5ac568;
  background-color: #fff;
  border-radius: 10px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color:1.5px solid #5ac568 ;
  }

  &.focused {
    border-color: 1.5px solid #5ac568;
    ${''}
  }

  & input {
    font-size: 24px;
    height: 40px;
    width:190px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
   
  }
`;

const useStyles = makeStyles({

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    objectFit: 'contain',
    padding: '18px 18px 18px 20px',
  },
  root: {
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.5',
    letterSpacing: '0.1px',
    textAlign: 'left',
    color: '#19293b',
  },
  rightGrid: {
    MarginLeft: '50%',
    backgroundColor: '#e7fce0'
  },
  title: {
    margin: '80px 160px 30px 80px',
    fontFamily: 'Montserrat',
    fontSize: '32px',
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.31',
    letterSpacing: '0.1px',
    textAlign: 'left',
    width: '550px',
    height: '84px',
  },
  subtitle: {
    margin: '20px 176px 20px 80px',
    // margin:'0 0 4px', 
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.3',
    letterSpacing: '0.2px',
    textAlign: 'left',
  }
});


const Listbox = styled('ul')`
   fontFamily: Montserrat,
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color:#fff;
  overflow: auto;
  max-height: 250px;
  width:500px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin-left: 80px;
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;

export default function CustomizedHook() {
  const classes = useStyles();

  const Tag = styled(({ label, onDelete, ...props }) => (
    <div {...props}>
      <div className={classes.root}>
        <span>{label}</span>
      </div>
      <CloseIcon onClick={onDelete} />
    </div>
  ))
    `
    display: flex;
    align-items: center;
    height: 24px;
    margin: 6px;
    line-height: 22px;
    background-color: #fafafa;
    border: 1.5px solid #5ac568;
    border-radius: 6px;
    box-sizing: content-box;
    // padding: 0 4px 0 10px;
    padding: 8px 10px;
    gap:8px;
    outline: 0;
    overflow: hidden;
    
    &:focus {
      border-color: #40a9ff;
      background-color: #e6f7ff;
    }
  
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  
    & svg {
      font-size: 20px;
      cursor: pointer;
      padding: 4px;
      color: #324552;
    }
  `;
  const maxOptions = 2;
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.value,
  });
  return (
    <NoSsr>
      <div>
        <ThemeProvider theme={customtheme}>
          <div {...getRootProps()}>
            <div >
              <Typography className={classes.title}>More than 2000 people are using Green Commute</Typography>
            </div>
            <div className={classes.subtitle}>
              <Typography> Where do you stay?</Typography>
            </div>
            <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
              <div className={classes.header}>
                <img src={"https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/1cf5595f-c291-4826-a6b4-1590090a90ff.svg"} width='24px' height='24px' />
              </div>
              {value.map((option, index) => (
                <Tag label={option.value} {...getTagProps({ index })} />
              ))}

              <input {...getInputProps()} />
            </InputWrapper>
          </div>
          {value.length < 2 && groupedOptions.length > 0 ? (
            <Listbox {...getListboxProps()}>
              {groupedOptions.map((option, index) => (
                <li {...getOptionProps({ option, index })}>
                  <span>{option.value}</span>
                  <CheckIcon fontSize="small" />
                </li>
              ))}
            </Listbox>
          ) : null}
          <div>
          </div>
        </ThemeProvider>
      </div>
    </NoSsr>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [


];
