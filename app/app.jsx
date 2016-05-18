// import { subscribe } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import TodoApp from 'TodoApp'

import * as actions from 'actions'
import { configure } from 'configureStore'
const store = configure();
import TodoAPI from 'TodoAPI'

// load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
// we use sass now, see sassLoader in webpack config.

let unsubscribe = store.subscribe(() => {
  let state = store.getState()
  console.log('New state', state)

  TodoAPI.setTodos(state.todos)
});

var initialTodos = TodoAPI.getTodos()
store.dispatch(actions.addTodos(initialTodos))

$(document).foundation()
// App css
import 'style!css?sourceMap!sass?sourceMap!applicationStyle'



ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
)
