// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab the property associated with the Router
var Router = require('react-router').Router

// Grabs the Routes
var routes = require('./config/routes.js');

// Renders the contents according to the route page. 
ReactDOM.render(<routes />, document.getElementById("app"));
