import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import styled from 'styled-components';
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import customtheme from '../../theme.jsx';
const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')`


  width: 350px;
  height: 50px;
  ${'' /* margin: 20px 210px 0px 80px; */}
  border: #e3f3f6;
  background-color: #ffffff
  border-radius: 10px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color:1.5px solid #5ac568 ;
  }

  &.focused {
    border-color: 1.5px solid #5ac568;
    ${'' /* box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2); */}
  }

  & input {
    fontFamily: 'Montserrat',
    width: 334px;
     height: 24px;
  align-self: center;
    box-sizing: border-box;
    padding: 6px 6px;
    marginTop:'10px';
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
    font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  text-overflow: ellipsis;
  color:'#19293b'; 
  
  }
`;
const useStyles = makeStyles({

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    objectFit: 'contain',
    //  padding: '18px 18px 18px 20px',
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
    // width: '50%',
    // height: '900px',
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
  },
  inputAlignment: {
    fontFamily: 'Montserrat',
    fontSize: '60px',
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
  width:484px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  ${'' /* margin-left: 80px; */}
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

export default function CustomTextFieldForJobSearch({ handleOnClickBackButton }) {
  const classes = useStyles();


  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [],
    multiple: false,
    options: top100Films,
    getOptionLabel: (option) => option.value,
  });
  return (
    <NoSsr data-testid="nossrinselect">
      <div data-testid="1stdivinselect">
        <ThemeProvider theme={customtheme}>
          <div {...getRootProps()} data-testid="2nddivinselect">

            <InputWrapper data-testid="inputwrapperinselect" ref={setAnchorEl} className={focused ? 'focused' : ''}>
              <div className={classes.header} data-testid="3rddivinselect">
                <img data-testid="imginselect" src={"https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/f290029c-37b1-40a9-9c06-9f4ed4d67272.svg"} style={{ width: '24px', height: '24px' }} />
              </div>

              <input data-testid="input1inselect" {...getInputProps()} placeholder="Search Skills" />

            </InputWrapper>
          </div>
          {groupedOptions.length > 0 ? (
            <Listbox data-testid="input1inselect" {...getListboxProps()}>
              {groupedOptions.map((option, index) => (
                <li data-testid="li1inselect" {...getOptionProps({ option, index })}>
                  <span data-testid="span1inselect">{option.value}</span>
                  <CheckIcon data-testid="checkinselect" fontSize="small" />
                </li>
              ))}
            </Listbox>
          ) : null}
          <div data-testid="4thinselect">
          </div>
        </ThemeProvider>
      </div>
    </NoSsr>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { value: "UI/UX Designer", label: "UI/UX Designer" },
  { value: "Product Designer", label: "Product Designer" },
  { value: "Product Designer", label: "Product Designer" },
];
