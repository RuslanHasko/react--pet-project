import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import TodoListForm from '@components/TodoList/Form'
import TodoListTasks from '@components/TodoList/Tasks'

const styles = theme => ({
  root: {
    padding: `${theme.spacing(3)}px 0`,
  },
  paper: {
    width: '100%',
    minHeight: theme.spacing(3)
  }
});

class TodoListView extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={8}>
            <TodoListForm/>
            <TodoListTasks/>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TodoListView);
