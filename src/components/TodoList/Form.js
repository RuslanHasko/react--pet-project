import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import TodoListActions from '@store/modules/TodoList/actions';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: `${theme.spacing(4)}px`
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

class TodoListForm extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      task: ''
    };
  }

  handleChange (event) {
    this.setState({
      task: event.target.value
    });
  }

  onResetField (event) {
    event.target.reset();
    this.setState({
      task: ''
    });
  }

  onSubmit (event) {
    event.preventDefault();
    const { task } = this.state;
    this.onResetField(event);

    if(!task) { return }

    this.props.addTask({ task });
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper
        component="form"
        className={classes.root}
        onSubmit={this.onSubmit}
      >
        <InputBase
          value={this.task}
          className={classes.input}
          placeholder="Create your new awesome task"
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={this.handleChange}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          aria-label="directions"
          type="submit"
        >
          <AddIcon />
        </IconButton>
      </Paper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addTask: TodoListActions.addTask }, dispatch)
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(TodoListForm))
