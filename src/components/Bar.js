import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import { CssBaseline, Paper, Grid } from '@material-ui/core';

const styles = theme => ({
    root: {
        margin: '1em',
        padding: '0.25em',
        backgroundColor: theme.palette.primary.bar
    },
});

class Bar extends Component {


    render() {
        const {name, percent,classes} = this.props;
        const widthPercent = "" + percent + "%";

        return (
            <Fragment>
                <CssBaseline/>
                <Paper elevation={0} className={classes.root} square={true} style={{width: widthPercent}}>
                    test
                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Bar);