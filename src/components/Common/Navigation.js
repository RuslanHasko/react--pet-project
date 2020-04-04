import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import autoBind from 'react-autobind';
import clsx from 'clsx';
import router from '@router'

import { withStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Logo from '@images/logo.png';

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    position: 'relative'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toggleDrawerButton: {
    position: 'absolute',
    top: '50px',
    right: 0,
    transform: 'translateX(50%)',
    zIndex: 1300,
    width: '35px',
    height: '35px',
    boxShadow: 'none'
  },
  logo: {
    margin: `${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  logoOpen: {
    width: '150px'
  },
  logoClose: {
    width: '25px',
    height: '25px',
    objectFit: 'cover',
    objectPosition: 'left',
  },
  navigationItem: {
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  navigationItemActive: {
    color: theme.palette.primary.main
  }
});

class Navigation extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      open: false
    };
  }

  toggleDrawer () {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <Fab
          className={classes.toggleDrawerButton}
          color="primary"
          aria-label="open drawer"
          onClick={this.toggleDrawer}
        >
          {this.state.open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </Fab>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
        >
          <img
            src={Logo}
            alt="PET-Project"
            className={clsx(classes.logo, {
              [classes.logoOpen]: this.state.open,
              [classes.logoClose]: !this.state.open,
            })}
          />
          <List>
            {router.routes.map((route) => (
              <ListItem
                component={NavLink}
                to={route.path}
                key={route.name}
                className={classes.navigationItem}
                activeClassName={classes.navigationItemActive}
                button
                exact
              >
                <ListItemIcon style={{ color: 'inherit' }}>
                  {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </section>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navigation);
