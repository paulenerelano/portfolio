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

import { CssBaseline, Typography, Paper, Slide, Divider} from '@material-ui/core';
import Banner from './Banner';

const styles = theme => ({
    root: {
        minHeight: '100vh'
    },
    paper: {
        background: theme.palette.background.default,
        margin: '1em',
        padding: '1em',
    },
    subtitle: {
        color: "#3D5A59",
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
                    <Timeline align='left'>
                        {experience.map((item, index) => {
                            let delay = (200 * index) + 500
                            return (
                                <TrackVisibility once>
                                {({ isVisible }) => 
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
                                                    <Typography variant='h6'>
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="subtitle2" variant='h6'>
                                                        {item.company.name}
                                                    </Typography>
                                                    <Divider/>
                                                    {item.description.map((desc) => {
                                                        return (
                                                            <Typography variant='body1'>
                                                                {"- " + desc}
                                                            </Typography>)
                                                    })}                                                    
                                                </Paper>
                                            </Slide>
                                        </TimelineContent>
                                    </TimelineItem>
                                }
                                </TrackVisibility>
                            )
                        })}
                    </Timeline>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Experience);