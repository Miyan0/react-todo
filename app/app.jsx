// import { subscribe } from 'redux'
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';

import * as actions from 'actions';
import { configure } from 'configureStore';
const store = configure();

// load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
// we use sass now, see sassLoader in webpack config.

let unsubscribe = store.subscribe(() => {
  console.log('New state', store.getState())
});

store.dispatch(actions.addTodo('Clean the yard'))
store.dispatch(actions.setSearchText('yard'))
store.dispatch(actions.toggleShowCompleted())


$(document).foundation();
// App css
import 'style!css?sourceMap!sass?sourceMap!applicationStyle'



ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
