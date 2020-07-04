import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import { CssBaseline, Typography, Paper} from '@material-ui/core';
import Banner from './Banner';

const styles = theme => ({
    paper: {
        background: theme.palette.background.default,
        margin: '1em',
        padding: '1em',
    }
});

class Experience extends Component {


    render() {
        const {experience, classes} = this.props;


        return (
            <Fragment>
                <CssBaseline/>
                <Banner title="Experience"/>
                <Timeline align='left'>
                    {experience.map((item, index) => {
                        return (
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography>
                                        {item.date}
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper className={classes.paper}>
                                        <Typography variant='h5'>
                                            {item.title}
                                        </Typography>
                                        <Typography variant='body1'>
                                            {item.description[0]}
                                        </Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })}
                </Timeline>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Experience);