import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TrackVisibility from 'react-on-screen';

import { CssBaseline, Paper, Grid, Avatar, Tooltip, Grow, Link } from '@material-ui/core';
import Banner from './Banner';

const styles = theme => ({
    root: {
        height: '100vh'
    },
    paper: {
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
                    <TrackVisibility partialVisibility>
                        {({ isVisible }) => 
                        <Grow in={isVisible}
                            {...(isVisible ? { timeout: 500 } : {})}
                        >
                            <Paper elevation={3} className={classes.paper}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                        <Link href={'tel:'+ contact.mobile}>
                                        <Avatar alt='Phone'>
                                            <Tooltip title="Call Paulene"><PhoneIphoneIcon/></Tooltip>
                                        </Avatar>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Link href={'tel:'+ contact.mobile}>
                                            <Typography variant='h6'>{contact.mobile}</Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Link href={'mailto:' + contact.email}>
                                        <Avatar alt='Email'>
                                            <Tooltip title='Email Paulene'><EmailIcon/></Tooltip>
                                        </Avatar>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Link href={'mailto:' + contact.email}>
                                            <Typography variant='h6'>{contact.email}</Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Link href={contact.linkedin} target='_blank'>
                                        <Avatar alt='LinkedIn'>
                                            <Tooltip title='View Paulene on LinkedIn'><LinkedInIcon/></Tooltip>
                                        </Avatar>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Link href={contact.linkedin} target='_blank'>
                                            <Typography variant='h6'>{contact.linkedin}</Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grow>
                    }
                    </TrackVisibility>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Projects);