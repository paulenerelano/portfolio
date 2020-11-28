import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TrackVisibility from 'react-on-screen';

import { CssBaseline, Paper, Grow, Grid, Hidden } from '@material-ui/core';
import Banner from './Banner';

const styles = theme => ({
    root: {
        height: '100vh',
        backgroundImage: "url("+process.env.PUBLIC_URL+"/bg.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right'
    },
    paper: {
        margin: '1em',
        padding: '1em',
    },
    about: {
        h5: {
            [theme.breakpoints.down('md')]: {
                fontSize: '5rem'
            }
        }
    }

});

class About extends Component {

    render() {
        const {about, classes, handleDrawerToggle} = this.props;

        return (
            <Fragment>
                <CssBaseline/>
                <div className={classes.root}>
                    <Banner title="About" handleDrawerToggle={handleDrawerToggle}/>
                    <TrackVisibility partialVisibility>
                    {({ isVisible }) => 
                        <Grow in={isVisible}
                            {...(isVisible ? { timeout: 500 } : {})}
                        >
                            <Grid container>
                                <Hidden smUp><Grid item xs={5}></Grid></Hidden>
                                <Grid item xs={7} lg={7}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant='h6'>
                                            {about}
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Hidden smDown><Grid item sm={5}></Grid></Hidden>
                            </Grid>
                        </Grow>
                    }
                    </TrackVisibility>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(About);