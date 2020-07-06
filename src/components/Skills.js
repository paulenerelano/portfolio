import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import TrackVisibility from 'react-on-screen';

import { CssBaseline, Paper, Grid } from '@material-ui/core';
import Banner from './Banner';
import Bar from './Bar';

const styles = theme => ({
    root: {
        height: '100vh'
    },
    paper: {
        background: theme.palette.background.default,
        margin: '1em',
        padding: '1em',
    }
});

class Skills extends Component {


    render() {
        const {skills, classes} = this.props;


        return (
            <Fragment>
                <div className={classes.root}>
                    <CssBaseline/>
                    <Banner title="Skills"/>
                    <Paper className={classes.paper}>
                        {skills.map((item) => {
                            return (
                                <Bar percent={item.confidenceLevel}
                                    title={item.skill}
                                />
                            )
                        })}
                    </Paper>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Skills);