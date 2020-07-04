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

const DRAWER_WIDTH = 240;
const styles = theme => ({
    root: {
    display: 'flex',
    },
    appBar: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    },
    drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    },
    drawerPaper: {
    width: DRAWER_WIDTH,
    },
    toolbar: {
    ...theme.mixins.toolbar,
    },
    content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    },
});

class Portfolio extends Component {
    drawerMenu = ["About", "Experience", "Portfolio", "Skills", "Education", "External Links"]
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
                <div className={classes.toolbar} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Portfolio);