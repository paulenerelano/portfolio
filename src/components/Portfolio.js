import React, { Fragment } from 'react';

import { Component } from "react";
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import PersonIcon from '@material-ui/icons/Person';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TimelineIcon from '@material-ui/icons/Timeline';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import SchoolIcon from '@material-ui/icons/School';
import MessageIcon from '@material-ui/icons/Message';
import HelpIcon from '@material-ui/icons/Help';
import MenuIcon from '@material-ui/icons/Menu';

import data from '../data/data.json'
import About from './About.js';
import Experience from './Experience.js';
import Contact from './Contact.js';
import Skills from './Skills.js';
import Education from './Education.js';
import Projects from './Projects.js';
import { Hidden, Icon, IconButton } from '@material-ui/core';

const DRAWER_WIDTH_DEFAULT = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        flexShrink: 0,
        [theme.breakpoints.up('sm')]: {
            width: DRAWER_WIDTH_DEFAULT,
        }
    },
    drawerPaper: {
        [theme.breakpoints.up('sm')]: {
            width: DRAWER_WIDTH_DEFAULT,
        },
    },
    content: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${DRAWER_WIDTH_DEFAULT}px)`,
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
    },
});

class Portfolio extends Component {
    drawerMenu = ["About", "Experience", "Projects", "Skills", "Education", "Contact"]
    state = {
        selectedMenuIndex: 0,
        mobileOpen: false,
    }

    constructor(props) {
        super(props)
        this.menu1Ref = React.createRef();
        this.menu2Ref = React.createRef();
        this.menu3Ref = React.createRef();
        this.menu4Ref = React.createRef();
        this.menu5Ref = React.createRef();
        this.menu6Ref = React.createRef();
    }

    getMenuIcon = (index) => {
        switch(index) {
        case 0:
            return <PersonIcon/>;
        case 1:
            return <TimelineIcon/>;
        case 2: 
            return <AmpStoriesIcon/>;
        case 3:
            return <EqualizerIcon/>;
        case 4:
            return <SchoolIcon/>;
        case 5:
            return <MessageIcon/>;
        default:
            return <HelpIcon/>;
        }
    }

    handleMenuItemClick = (index) => {
        // const scrollOpts = {block: "start", inline: "nearest", behavior: 'smooth'};
        const scrollOpts = true;

        this.setState({selectedMenuIndex: index})
        switch(index) {
            case 0:
                this.menu1Ref.current.scrollIntoView(scrollOpts);
                break;
            case 1:
                this.menu2Ref.current.scrollIntoView(scrollOpts);
                break;
            case 2: 
                this.menu3Ref.current.scrollIntoView(scrollOpts);
                break;
            case 3:
                this.menu4Ref.current.scrollIntoView(scrollOpts);
                break;
            case 4:
                this.menu5Ref.current.scrollIntoView(scrollOpts);
                break;
            case 5:
                this.menu6Ref.current.scrollIntoView(scrollOpts);
                break;
            default:
                this.menu1Ref.current.scrollIntoView(scrollOpts);
                break;
        }
    }

    handleDrawerToggle = () => {
        const {mobileOpen} = this.state

        console.log(mobileOpen)
        this.setState({mobileOpen: !mobileOpen})
    }

    getDrawerContent = () => {
        const {selectedMenuIndex} = this.state

        return <Fragment>
            <div style={{padding: '0.5em'}}>
                <Typography variant="h4" fontWeight='fontWeightBold' align='left' gutterBottom>
                {data.name}
                </Typography>
                <Typography variant='h6'>
                {data.subtitle}
                </Typography>
            </div>
            <Divider />
            <List>
                {this.drawerMenu.map((item, index) => {
                    return (
                        <ListItem
                            button
                            selected={selectedMenuIndex === index}
                            onClick={() => {this.handleMenuItemClick(index)}}
                            key={"menu" + index}
                        >
                            <ListItemIcon>
                            {this.getMenuIcon(index)}
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    );
                })}
            </List>
        </Fragment>
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <ScopedCssBaseline />
                <Hidden smDown>
                    <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                    >
                        {this.getDrawerContent()}
                    </Drawer>
                </Hidden>
                <main className={classes.content}>
                    <div ref={this.menu1Ref}>
                        <About 
                            about={data.about}
                            handleDrawerToggle={this.handleDrawerToggle}
                            />
                    </div>
                        
                    <div ref={this.menu2Ref}>
                        <Experience 
                            experience={data.experience}
                            handleDrawerToggle={this.handleDrawerToggle}/>
                    </div>
                    <div ref={this.menu3Ref}>
                        <Projects 
                            projects={data.projects}
                            handleDrawerToggle={this.handleDrawerToggle}/>
                    </div>
                    <div ref={this.menu4Ref}>
                        <Skills 
                            skills={data.skills}
                            handleDrawerToggle={this.handleDrawerToggle}/>
                    </div>
                    <div ref={this.menu5Ref}>
                        <Education 
                            education={data.education}
                            handleDrawerToggle={this.handleDrawerToggle}/>
                    </div>
                    <div ref={this.menu6Ref}>
                        <Contact 
                            contact={data.contact}
                            handleDrawerToggle={this.handleDrawerToggle}/>
                    </div>
                        
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Portfolio);