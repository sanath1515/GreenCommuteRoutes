import { Button, Divider, Grid, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import CustomTextFieldForJobSearch from "../../atoms/TextField/CustomTextFieldForJobSearch";
import CustomTextFieldForJobLocation from '../../atoms/TextField/CustomTextFieldForJobLocation';
import customtheme from "../../theme";

const useTextFieldStyles = makeStyles({
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    }
})

const useStyles = makeStyles((theme) => ({
    searchIcon: {
        width: '80px',
        height: '50px',
        backgroundColor: "#5ac568",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius: "0%",
        borderBottomLeftRadius: "0%",
        contrastText: "#fafafa",
    },
    textFieldSearch: {
        width: "500px",
        paddingTop: '6px',
    },
    textFieldLocation: {
        // width: "400px",
        paddingTop: '6px'
    },
    iconClass: {
        color: '#9bbdcb',
        width: '24px',
        height: '24px',
        paddingTop: '12px',
        paddingRight: '4px'
    },
    gridComponent: {
        width: '1060px',
        height: '50px',
        // margin: '15px 59px 30px 60px',
        padding: '0 0 0 15px',
        borderRadius: '10px',
        border: 'solid 1px #e3f3f6',
        backgroundColor: '#ffffff',
        margin: {
            margin: theme.spacing(1),
        },
    }
}))


export function JobSearch(props) {
    const classes = useStyles();
    const textFieldSearchStyles = useTextFieldStyles();
    // const dispatch = useDispatch();
    const [valInSearchSkills, setValInSearchSkills] = React.useState('');

    const handleChangeForTextInSearchSkills = (newVal) => {

        setValInSearchSkills(newVal)
    }

    const handleChange = () => {

    }

    const searchFieldPlaceHolder = <Typography variant="subtitle1">Search Skills</Typography>

    return (
        <div>
            <ThemeProvider theme={customtheme}>
                <Grid container direction="row" className={classes.gridComponent}>
                    <Grid item direction="column" style={{ width: "480px" }}>
                        <CustomTextFieldForJobSearch />
                    </Grid>
                    <Divider style={{ marginTop: '5px', marginBottom: '5px', height: '40px' }} orientation="vertical" />
                    <Grid item direction="column" style={{ width: "480px" }}>
                        <CustomTextFieldForJobLocation />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" className={classes.searchIcon} onClick={(event) => { handleChange() }}>
                            <SearchIcon />
                        </Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
}