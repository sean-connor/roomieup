//React
var React = require('react');
var ReactDOM = require('react-dom');
//API
var ApiUtils = require('./util/apiUtil');
// Routing
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
//Component Requirement
var App = require('./components/app');
var Home = require('./components/home');
var SearchListings = require('./components/searchlisting');
var SavedListings = require('./components/savedlisting');
var Chat = require('./components/chat');



var routes = (
  <Route path="/" component={App}>
    <Route path="home" component={Home}/>
    <Route path="searchlistings" component={SearchListings}/>
    <Route path="savedlistings" component={SavedListings}/>
    <Route path="chat" component={Chat}/>
  </Route>
);



document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
