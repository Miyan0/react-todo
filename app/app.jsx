import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import TodoApp from 'TodoApp';

// load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
// we use sass now, see sassLoader in webpack config.

$(document).foundation();
// App css
import 'style!css?sourceMap!sass?sourceMap!applicationStyle'



ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
