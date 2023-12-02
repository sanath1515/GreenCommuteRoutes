import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, Tab, Tabs, AppBar, ThemeProvider, Button } from '@material-ui/core';

import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import TravelOptionCard from '../TravelOptionCard/TravelOptionCard';
import customtheme from '../../theme';
import { DirectionsBus } from '@material-ui/icons';
import { green, grey, red } from '@material-ui/core/colors';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        //   <ThemeProvider theme = { customtheme}>
        <Grid
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Grid>
        // </ThemeProvider>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: '390px'
    },
    caption32: {
        fontFamily: 'Montserrat',
        fontSize: '10px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.6,
        letterSpacing: '0.2px',
        color: grey[400]
    },
    linkStyles: {
        color: '#5ac568',
        fontWeight: 600,
        lineHeight: 1.29
    },
    link: {
        textDecoration: 'none'
    },
    header: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    right: {
        marginLeft: 'auto'
    },
    directionsDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'flex-start',
        padding: '10px 0px 10px 0px'
    },
    innerDirectionDivText: {
        color: '#5f7381',
        paddingRight: '8px',

    },
    textInRed: {
        color: red[500],
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: 1.33,
        letterSpacing: '0.2px',
    },
    textInGreen: {
        color: green[500]
    },
    locationTimeCostText: {
        color: '#5f7381',
        fontSize: '11px',
        fontFamily: 'Montserrat',
        lineHeight: 1.6,
        letterSpacing: '0.2px',
        fontWeight: '500'
    },
    travelInfoDiv: {
        display: 'flex',
        flexDirection: 'column',
    },
    tabIcons: {
        width: '24px',
        height: '24px',
        root: {
            '@media (min-width: 600px)': {
                height: '48px',
                minWidth: '48px',
            },
            borderBottomColor: '#0000ff',


            // color: '#9bbdcb',
        },
        textColorInherit: {
            '&$selected': {
                backgroundColor: '#5ac568',
                color: 'white',
                borderBottomColor: '#0000ff',
                '&:hover': {
                    backgroundColor: '#5ac568'
                }
            }
        }
    },
    descriptionIcons: {
        width: '20px',
        height: '20px'
    }
}));



export default function JobCardInfo({ mapImageSrc, srcLocation, destLocation }) {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={customtheme}>
            <div className={classes.root} data-testid="maindivintravelinfocard" >
                <Container>
                    <Grid container direction="row" alignItems="center" data-testid="maingridintravelinfocard" >
                        <Grid item spacing={6} data-testid="maingriditemintravelinfocard" >
                            <Typography variant="subtitle1" data-testid="typographyintravelinfocard"  >Your options</Typography>
                        </Grid>
                        <Grid item className={classes.right} spacing={6} data-testid="secondgridintravelinfocard" >
                            <AppBar position="static" color="transparent" data-testid="Appbarintravelinfocard" >
                                <Tabs value={value} onChange={handleChange} >
                                    <Tab label={<TrainOutlinedIcon className={classes.tabIcons} />} {...allyProps(0)} />
                                    <Tab label={<DirectionsBus className={classes.tabIcons} />} {...allyProps(1)} />
                                    <Tab label={<LocalTaxiOutlinedIcon className={classes.tabIcons} />} {...allyProps(2)} />
                                    <Tab label={<MotorcycleOutlinedIcon className={classes.tabIcons} />} {...allyProps(3)} />
                                </Tabs>
                            </AppBar>
                        </Grid>
                    </Grid>
                    <br />
                    <Grid container alignItems="center" data-testid="thirdgridintravelinfocard">
                        <Grid item data-testid="thirdgriditemintravelinfocard">
                            <Typography variant="body2" style={{ color: grey[700] }} >{srcLocation + " - " + destLocation}</Typography>
                        </Grid>
                        <Grid item className={classes.right} data-testid="fourthgriditemintravelinfocard">
                            <Typography variant="caption" style={{ color: grey[700] }} >65$ • 58 mins</Typography>
                        </Grid>
                    </Grid>
                    <br />
                    <TabPanel value={value} index={0}>
                        <Grid data-testid="fifthgridintravelinfocard" >
                            <Grid className={classes.directionsDiv} data-testid="sixthgridintravelinfocard">
                                <Grid data-testid="seventhgridintravelinfocard">
                                    <DirectionsBus className={classes.descriptionIcons} />
                                </Grid>
                                <Grid data-testid="eigthgridintravelinfocard">
                                    <Grid>
                                        <Typography variant="caption" className={classes.innerDirectionDivText} data-testid="firsttypography">
                                            Catch a bus 38X at 3:42 PM to Secunderabad bus stand.
                                        </Typography>
                                        <Typography variant="caption" className={classes.textInRed} data-testid="secondtypography">
                                            2 mins late
                                        </Typography>
                                    </Grid>
                                    <Typography className={classes.caption32} data-testid="thirdtypography">
                                        10$ • 20 mins
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid className={classes.directionsDiv} data-testid="ninthgridintravelinfocard">
                                <Grid data-testid="tenthgridintravelinfocard">
                                    <DirectionsWalkIcon className={classes.descriptionIcons} />
                                </Grid>
                                <Grid>
                                    <Typography variant="caption" className={classes.innerDirectionDivText} data-testid="fourthtypography" >
                                        Head north on St. Johns road.
                                    </Typography>
                                    <Typography className={classes.caption32} data-testid="fifthtypography" >
                                        2 mins
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid className={classes.directionsDiv} data-testid="elevengridintravelinfocard">
                            <Grid data-testid="twelthgridintravelinfocard">
                                <TrainOutlinedIcon className={classes.descriptionIcons} />
                            </Grid>
                            <Grid data-testid="thirteengridintravelinfocard">
                                <Grid data-testid="fourteengridintravelinfocard">
                                    <Typography variant="caption" className={classes.innerDirectionDivText} data-testid="sixthtypography" >
                                        Catch a blue line metro towards Raidurg.
                                    </Typography>
                                    <Typography variant="caption" className={classes.textInGreen} data-testid="seventhtypography" >
                                        On time
                                    </Typography >
                                </Grid>
                                <Typography className={classes.caption32} data-testid="eigthtypography" >
                                    55$ • 36mins
                                </Typography>
                            </Grid>
                        </Grid>


                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Typography variant="caption" className={classes.innerDirectionDivText}>Directions coming soon</Typography>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Grid Container spacing={3} data-testid="fifteengridintravelinfocard">

                            <Grid item data-testid="sixteengridintravelinfocard" >
                                <TravelOptionCard
                                    imageSrc='https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Ola_Cabs_logo.svg/1200px-Ola_Cabs_logo.svg.png'
                                    cabServiceName="Ola"
                                    costEstimation="Approx Rs. 65"
                                />
                            </Grid>
                            <Grid item data-testid="seventeengridintravelinfocard">
                                <TravelOptionCard
                                    imageSrc='https://130e178e8f8ba617604b-8aedd782b7d22cfe0d1146da69a52436.ssl.cf1.rackcdn.com/ubers-british-breach-tally-27-million-victims-showcase_image-3-a-10491.jpg'
                                    cabServiceName="Uber"
                                    costEstimation="Approx Rs. 65"
                                />
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Typography data-testid="ningthtypography" variant="caption" className={classes.innerDirectionDivText}>Directions coming soon</Typography>
                    </TabPanel>

                    <br />
                    <Button><Typography variant="body2" data-testid="tenthtypography" style={{ color: green[400] }} > View in google maps</Typography></Button>
                </Container>
            </div>

        </ThemeProvider>
    );
}
