import React from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import { CssBaseline, Paper } from '@material-ui/core';

const styles = theme => ({
    root: {
        display: 'flex',
        margin: 0,
        padding: '1em',
    },
    toolbar: {
    ...theme.mixins.toolbar,
    },
});

class Banner extends Component {


    render() {
        const {title, classes} = this.props;


        return (
            <div className={classes.toolbar}>
                <CssBaseline/>
                <Paper elevation={0} square={true} className={classes.root}>
                    <Typography variant='h4' color='textSecondary'>
                        {title}
                    </Typography>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Banner);