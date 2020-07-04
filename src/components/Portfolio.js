import React from 'react';

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
import LanguageIcon from '@material-ui/icons/Language';
import HelpIcon from '@material-ui/icons/Help';

import data from '../data/data.json'
import About from './About.js';
import Experience from './Experience.js';

const DRAWER_WIDTH = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
    },
    drawerPaper: {
        width: DRAWER_WIDTH,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(0),
    },
});

class Portfolio extends Component {
    drawerMenu = ["About", "Experience", "Portfolio", "Skills", "Education", "External Links"]
    refs = [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]
    state = {
        selectedMenuIndex: 0,
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
            return <LanguageIcon/>;
        default:
            return <HelpIcon/>;
        }
    }

    handleMenuItemClick = (index) => {
        // this.refs[index].current.scrollIntoView({behavior: 'smooth'});
        this.setState({selectedMenuIndex: index})
    }


    render() {
        const {classes} = this.props;
        const {selectedMenuIndex}  = this.state;

        return (
            <div className={classes.root}>
                <ScopedCssBaseline />
                <Drawer
                className={classes.drawer}
                variant="permanent"
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
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
                </Drawer>
                <main className={classes.content}>
                    <div ref={this.refs[0]}>
                        <About 
                            about={data.about}
                            contact={data.contact}/>
                        <Experience 
                            experience={data.experience}/>
                    </div>
                        
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Portfolio);