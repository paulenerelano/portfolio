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
        margin: '1em',
        padding: '1em',
    },
    subtitle: {
        color: "#3D5A59",
    }
});

class Experience extends Component {

    getExperience = () => {
        const {experience, classes} = this.props;

        return experience.map((item, index) => {
            let delay = (200 * index) + 500
            return (
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <TrackVisibility once key={"timeline"+index}>
                        {({ isVisible }) => 
                            <Slide direction={index%2===1? "right" : "left"} in={isVisible}
                                {...(isVisible ? { timeout: delay } : {})}>
                                    <div>
                                        <Typography color='textSecondary' variant='h5'>
                                            {item.date}
                                        </Typography>
                                        <Paper className={classes.paper}>
                                            <Typography variant='h5'>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="subtitle2">
                                                {item.company.name}
                                            </Typography>
                                            <Divider/>
                                            {item.description.map((desc, index) => {
                                                return (
                                                    <Typography variant="body2" key={"desc"+index}>
                                                        {"- " + desc}
                                                    </Typography>)
                                            })}                                                    
                                        </Paper>
                                    </div>
                            </Slide>}
                        </TrackVisibility>
                    </TimelineContent>
                </TimelineItem>
            )
        })
    }

    render() {
        const {classes} = this.props;


        return (
            <Fragment>
                <div className={classes.root}>
                <CssBaseline/>
                <Banner title="Experience"/>
                    <Timeline align='alternate'>
                        {this.getExperience()}
                    </Timeline>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Experience);