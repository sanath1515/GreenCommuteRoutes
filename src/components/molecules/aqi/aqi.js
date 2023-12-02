import React from 'react'
import { ThemeProvider, Typography, makeStyles, Grid } from '@material-ui/core'
import customtheme from '../../theme.jsx'
import '../../../constants.css';

const useStyles = makeStyles((theme) => ({
    right: {
        marginLeft: 'auto'
    }
}));

export default function AQI({ text, imgPath, isNumber, count, isNumberTag, numberTag, textSize, countSize, numberTagSize, color }) {
    return (
        <ThemeProvider theme={customtheme}>
            <Grid container direction="column" justify="space-between" alignItems="center" data-testid='aqishower'>
                <Grid item>
                    <img src={imgPath} alt="AQI" data-testid='aqiimage' />
                </Grid>
                <Grid item >
                    <Grid container spacing={3}>
                        <Grid container direction="row" justify="space-between" alignItems='center' >

                            {isNumber && isNumberTag && count != 953 &&
                                <Grid container direction='column' justify='center' xs={12} sm={6} md={4}>
                                    <Grid item >
                                        <Typography style={{
                                            fontFamily: 'Montserrat',
                                            fontSize: '100px',
                                            fontWeight: '300',
                                            letterSpacing: '0.2px',
                                            textAlign: 'center'
                                        }}
                                            data-testid='aqitext showing count'
                                        >

                                            {count}

                                        </Typography>
                                    </Grid>
                                    <Grid item alignItems='center' >

                                        <Typography data-testid='aqitext showing value' style={{ fontFamily: 'Montserrat', fontWeight: "500", fontSize: numberTagSize, color: color, textAlign: 'center' }} >
                                            {numberTag}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            }
                            <Grid container spacing={3}>
                                <Grid container direction="row" justify="space-between" alignItems="center">
                                    {isNumber && isNumberTag && count == 953 && numberTag.map(city => (
                                        <Grid container direction="row" justify='center' alignItems='center' xs={12} sm={6} md={4} key={city}>
                                            <Grid item >
                                                <Typography style={{
                                                    fontFamily: 'Montserrat',
                                                    fontSize: '100px',
                                                    fontWeight: '300',
                                                    letterSpacing: '0.2px',
                                                    textAlign: 'center'
                                                }}
                                                    data-testid='aqitext showing count'>
                                                    {count}

                                                </Typography>
                                            </Grid>

                                            <Grid >
                                                <Typography data-testid='aqitext showing value' style={{ fontFamily: 'Montserrat', fontWeight: "500", fontSize: numberTagSize, color: color, textAlign: 'center' }} >
                                                    {city.label}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    ))
                                    }
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                {!isNumberTag && <Typography style={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '100px',
                                        fontWeight: '300',
                                        letterSpacing: '0.2px',
                                        textAlign: 'center',
                                    }}>
                                        {count}

                                    </Typography>
                                }
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
                <Grid item>
                    <Typography data-testid='aqitext showing text' style={{ fontFamily: 'Montserrat', fontWeight: "500", fontSize: textSize, marginTop: textSize, color: color }}>
                        {text}
                    </Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}