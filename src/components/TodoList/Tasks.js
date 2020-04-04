import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withStyles } from '@material-ui/core/styles';
import TodoListItem from '@components/TodoList/Item'
import { connect } from "react-redux";
import { isEmptyArray } from '@helpers'
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    padding: `${theme.spacing(3)}px 0`,
  },
  list: {
    marginBottom: `${theme.spacing(4)}px`
  }
});

class TodoListItems extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  get todoTasks () {
    return this.props.tasks.filter(task => !task.completed).reverse();
  }

  get completedTasks () {
    return this.props.tasks.filter(task => task.completed).reverse();
  }

  get lists () {
    return [
      {
        items: this.todoTasks,
        name: 'TODO'
      },
      {
        items: this.completedTasks,
        name: 'Completed'
      }
    ]
  }

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        {this.lists.map(list => (
          <section key={list.name} className={classes.list}>
            <Typography variant="h6" noWrap>
              {list.name} tasks:
            </Typography>
            {
              isEmptyArray({ array: list.items })
                ? <Typography variant="subtitle1" noWrap>
                  You have no {list.name} tasks yet
                </Typography>
                : list.items.map(task => (
                  <TodoListItem task={task} key={task.hash}/>
                ))
            }
          </section>
        ))}
      </section>
    );
  }
}

const mapStateToProps = ({ TodoList }) => {
  return {
    tasks: TodoList.tasks
  };
};

export default connect(mapStateToProps)(withStyles(styles)(TodoListItems))
