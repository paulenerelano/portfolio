import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import TrackVisibility from 'react-on-screen';

import { CssBaseline, Grow, Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import Banner from './Banner';

const styles = theme => ({
    root: {
        minHeight: '100vh'
    },
    card: {
        margin: '1em',
        minHeight: '10vh',
    },
    media: {
        height: 140,
    },
});


class Skills extends Component {

    createCard = (isVisible, skill, index) => {
        const {classes} = this.props;
        return (
            <Grow in={isVisible}
                {...(isVisible ? { timeout: 500 + (200 * index) } : {})}
                key={"skill"+index}
            >
                <Grid item xs={2}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia 
                                image={skill.thumbnail}
                                className={classes.media}
                            />
                            <CardContent>
                                <Typography variant='h5'>
                                    {skill.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grow>
        )
    }

    render() {
        const {skills, classes} = this.props;

        return (
            <Fragment>
                <div className={classes.root}>
                    <CssBaseline/>
                    <Banner title="Skills"/>
                    <TrackVisibility partialVisibility>
                    {({ isVisible }) => 
                        <Grid container >
                            {skills.map((skill, index) => { 
                                return (
                                    this.createCard(isVisible, skill, index)
                                )
                            })}
                        </Grid>
                    }
                    </TrackVisibility>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Skills);