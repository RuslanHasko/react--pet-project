import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Main from '@components/Common/Main'
import Navigation from '@components/Common/Navigation'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100vh'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <section className={classes.root}>
          <Navigation />
          <Main/>
        </section>
      </Router>
    </React.Fragment>
  );
}

export default App;
