import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import TrackVisibility from 'react-on-screen';

import { CssBaseline, Paper, Grid } from '@material-ui/core';
import Banner from './Banner';

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

class Projects extends Component {


    render() {
        const {contact, externalLinks, classes} = this.props;


        return (
            <Fragment>
                <div className={classes.root} >
                    <CssBaseline/>
                    <Banner title="Contact"/>
                    <Paper elevation={3} square={true} className={classes.paper}>
                        <Grid container>
                            <Grid item xs={1}><PhoneIphoneIcon/></Grid>
                            <Grid item xs={11}>{contact.mobile}</Grid>
                            <Grid item xs={1}><EmailIcon/></Grid>
                            <Grid item xs={11}>{contact.email}</Grid>
                        </Grid>
                    </Paper>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Projects);