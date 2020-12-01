import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import TrackVisibility from 'react-on-screen';

import { CssBaseline, Grow, Grid, Card, CardMedia, CardContent, Typography, Link } from '@material-ui/core';
import Banner from './Banner';

const styles = theme => ({
    root: {
        minHeight: '100vh'
    },
    card: {
        margin: '1em',
        [theme.breakpoints.down('sm')] : {
            minHeight: '20vh',
        },
        [theme.breakpoints.only('md')] : {
            minHeight: '30vh',
        },
        [theme.breakpoints.up('lg')] : {
            minHeight: '58vh',
        }
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
                <Grid item xs={12} md={6} lg={4} >
                    <Card className={classes.card}>
                        <Link href={project.url} target="_blank">
                            <CardMedia 
                                image={project.thumbnail}
                                className={classes.media}
                            />
                        </Link>
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
                    </Card>
                </Grid>
            </Grow>
        )
    }

    render() {
        const {projects, classes, handleDrawerToggle} = this.props;

        return (
            <Fragment>
                <div className={classes.root}>
                    <CssBaseline/>
                    <Banner title="Projects" handleDrawerToggle={handleDrawerToggle}/>
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