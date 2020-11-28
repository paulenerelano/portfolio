import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import TrackVisibility from 'react-on-screen';

import { CssBaseline, Paper, Grid, Grow, Typography } from '@material-ui/core';
import Banner from './Banner';

const styles = theme => ({
    root: {
        height: '50vh'
    },
    paper: {
        margin: '1em',
        padding: '1em',
    }
});

class Education extends Component {


    render() {
        const {education, classes} = this.props;


        return (
            <Fragment>
                <div className={classes.root} >
                    <CssBaseline/>
                    <Banner title="Education"/>
                    <Grid container>
                        {education.map((item) => {
                            return <Grid item xs={12} lg={4}>
                                <TrackVisibility partialVisibility>
                                {({ isVisible }) => 
                                    <Grow in={isVisible}
                                        {...(isVisible ? { timeout: 500 } : {})}
                                    >
                                        <Paper className={classes.paper}>
                                                <Typography variant='h5'>
                                                    {item.school}
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    {item.degree}
                                                </Typography>
                                                <Typography variant="body1">
                                                    {item.date}
                                                </Typography>                                               
                                            </Paper>
                                    </Grow>
                                }
                                </TrackVisibility>
                            </Grid>
                        })}
                    </Grid>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Education);