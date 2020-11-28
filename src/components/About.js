import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TrackVisibility from 'react-on-screen';

import { CssBaseline, Paper, Grow } from '@material-ui/core';
import Banner from './Banner';

const styles = theme => ({
    root: {
        height: '100vh',
        backgroundImage: "url("+process.env.PUBLIC_URL+"/bg.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    paper: {
        margin: '1em',
        padding: '1em',
    }
});

class About extends Component {


      
    render() {
        const {about, classes} = this.props;

        return (
            <Fragment>
                <CssBaseline/>
                <div className={classes.root}>
                    <Banner title="About"/>
                    <TrackVisibility partialVisibility>
                    {({ isVisible }) => 
                        <Grow in={isVisible}
                            {...(isVisible ? { timeout: 500 } : {})}
                        >
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant='h5'>
                                    {about}
                                </Typography>
                            </Paper>
                        </Grow>
                    }
                    </TrackVisibility>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(About);