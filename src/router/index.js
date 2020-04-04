import React from "react";

import HomeView from '@views/Home';
import TodoListView from '@views/TodoList';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FormatListNumberedRoundedIcon from '@material-ui/icons/FormatListNumberedRounded';


export default {
  routes: [
    {
      path: '/',
      name: 'Home',
      title: 'Home Page',
      component: <HomeView />,
      icon: <HomeRoundedIcon/>
    },
    {
      path: '/todo-list',
      name: 'TodoList',
      title: 'TODO List Page',
      component: <TodoListView />,
      icon: <FormatListNumberedRoundedIcon/>
    }
  ]
}
