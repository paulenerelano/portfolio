import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import TrackVisibility from 'react-on-screen';

import { CssBaseline, Grow, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Link } from '@material-ui/core';
import Banner from './Banner';

const styles = theme => ({
    root: {
        minHeight: '100vh'
    },
    card: {
        margin: '1em',
        minHeight: '55vh',
    },
    media: {
        height: 140,
    },
});


class Projects extends Component {

    createCard = (isVisible, project, index) => {
        const {classes} = this.props;
        return (
            <Grow in={isVisible}
                {...(isVisible ? { timeout: 500 + (200 * index) } : {})}
                key={"proj" + index}
            >
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia 
                                image={project.thumbnail}
                                className={classes.media}
                            />
                            <CardContent>
                                <Typography variant='h5'>
                                    <Link href={project.url} target="_blank">
                                        {project.name}
                                    </Link>
                                </Typography>
                                <Typography variant='body2'>
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grow>
        )
    }

    render() {
        const {projects, classes} = this.props;

        return (
            <Fragment>
                <div className={classes.root}>
                    <CssBaseline/>
                    <Banner title="Projects"/>
                    <TrackVisibility partialVisibility>
                    {({ isVisible }) => 
                        <Grid container >
                            {projects.map((project, index) => { 
                                return (
                                    this.createCard(isVisible, project, index)
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

export default withStyles(styles)(Projects);