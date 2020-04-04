import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TodoListActions from '@store/modules/TodoList/actions';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    width: '100%',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    margin: `${theme.spacing(1)}px 0`
  }
});

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  onRemoveTask () {
    this.props.removeTask({ hash: this.props.task.hash  });
  }

  onMarkTaskAsCompleted () {
    this.props.markTaskAsCompleted({ hash: this.props.task.hash });
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper
        className={classes.root}
      >
        <Checkbox
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={this.onMarkTaskAsCompleted}
        />
        {this.props.task.name}
        <IconButton
          aria-label="delete"
          className={classes.margin}
          onClick={this.onRemoveTask}
        >
          <DeleteIcon fontSize="small"/>
        </IconButton>
      </Paper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = {
    markTaskAsCompleted: TodoListActions.markTaskAsCompleted,
    removeTask: TodoListActions.removeTask
  };
  return bindActionCreators(actions, dispatch)
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(TodoListItem));
