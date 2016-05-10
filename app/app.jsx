var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');


// load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
// we use sass now, see sassLoader in webpack config.

$(document).foundation();
// App css
require('style!css?sourceMap!sass?sourceMap!applicationStyle');



ReactDOM.render(
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app')
);
