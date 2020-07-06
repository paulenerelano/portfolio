import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import TrackVisibility from 'react-on-screen';

import { CssBaseline, Paper, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Link } from '@material-ui/core';
import Banner from './Banner';

const styles = theme => ({
    root: {
        height: '100vh'
    },
    card: {
        background: theme.palette.background.default,
        margin: '1em',
        padding: '1em',
    },
    media: {
        height: 140,
    },
});

class Projects extends Component {


    render() {
        const {projects, classes} = this.props;


        return (
            <Fragment>
                <div className={classes.root}>
                    <CssBaseline/>
                    <Banner title="Projects"/>
                    <TrackVisibility>
                    {({ isVisible }) => 
                        <Grid container>
                            {projects.map((project) => { 
                                return (
                                    <Grid item xs={3}>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia 
                                                    image={project.thumbnail}
                                                    className={classes.media}
                                                />
                                                <CardContent>
                                                    <Typography variant='h5'>
                                                        <Link href={project.url}>
                                                            {project.name}
                                                        </Link>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
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