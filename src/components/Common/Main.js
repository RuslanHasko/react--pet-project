import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  matchPath
} from "react-router-dom";
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import router from '@router'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: `${theme.spacing(3)}px ${theme.spacing(5)}px`,
  },
  title: {
    marginBottom: `${theme.spacing(2)}px`,
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      title: ''
    };
  }

  get pageTitle () {
    const currentRoute = router.routes
      .find(route => matchPath(this.props.location.pathname, { path: route.path, exact: true }) != null) || {};
    return currentRoute.title
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.root}>
        <Typography variant="h5" className={classes.title} noWrap>
          {this.pageTitle}
        </Typography>
        <Switch>
          {router.routes.map((route) => (
            <Route exact path={route.path} key={route.name}>
              {route.component}
            </Route>
          ))}
          <Redirect to="/" />
        </Switch>
      </main>
    );
  }
}

export default withRouter(connect()(withStyles(styles)(Main)));
