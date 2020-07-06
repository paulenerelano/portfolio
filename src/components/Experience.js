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
import TrackVisibility from 'react-on-screen';

import { CssBaseline, Typography, Paper, Slide} from '@material-ui/core';
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

class Experience extends Component {

    render() {
        const {experience, classes} = this.props;


        return (
            <Fragment>
                <div className={classes.root}>
                    <CssBaseline/>
                    <Banner title="Experience"/>
                    <TrackVisibility>
                    {({ isVisible }) => 
                        <Timeline align='left'>
                            {experience.map((item, index) => {
                                let delay = (200 * index) + 500
                                return (
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Slide direction="right" in={isVisible}
                                                {...(isVisible ? { timeout: delay } : {})}>
                                                <Typography>
                                                    {item.date}
                                                </Typography>
                                            </Slide>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Slide direction="left" in={isVisible}
                                                {...(isVisible ? { timeout: delay } : {})}>
                                                <Paper className={classes.paper}>
                                                    <Typography variant='h5'>
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant='body1'>
                                                        {item.description[0]}
                                                    </Typography>
                                                </Paper>
                                            </Slide>
                                        </TimelineContent>
                                    </TimelineItem>
                                )
                            })}
                        </Timeline>
                    }
                    </TrackVisibility>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Experience);