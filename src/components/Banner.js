import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';


import { CssBaseline, Paper, IconButton, Hidden, Grid } from '@material-ui/core';
import data from '../data/data.json'

const styles = theme => ({
    root: {
        display: 'flex',
        margin: 0,
        padding: '1em',
        backgroundColor: theme.palette.primary.bar,
    },
    toolbar: {
    ...theme.mixins.toolbar,
    },
});

class Banner extends Component {


    render() {
        const {title, classes, handleDrawerToggle} = this.props;


        return (
            <div className={classes.toolbar}>
                <CssBaseline/>
                <Paper elevation={0} square={true} className={classes.root}>
                    <Hidden smDown>
                        <Typography variant='h4' color='textSecondary'>{title}</Typography>
                    </Hidden>
                    <Hidden mdUp>
                        {title.localeCompare("About") === 0? 
                            <Grid container>
                                <Grid item xs={12}><Typography variant='h5' color='textSecondary'>{data.name}</Typography></Grid>
                                <Grid item xs={12}><Typography variant='subtitle1' color='textSecondary'>{data.subtitle}</Typography></Grid>
                            </Grid>
                            :
                            <Typography variant='h4' color='textSecondary'>{title}</Typography>
                        }
                    </Hidden>
                    
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Banner);