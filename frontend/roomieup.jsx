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
var Splash = require('./components/splash');
var SearchListings = require('./components/searchlisting');
var SavedListings = require('./components/savedlisting');
var Chat = require('./components/chatEntry');
var Auth = require('./components/auth');
var ListingShow = require('./components/Listings/listingShow');

var routes = (
  <Route path="/" component={App}>
    <Route path="splash" component={Splash}/>
    <Route path="home" component={Home}/>
    <Route path="searchlistings" component={SearchListings}/>
    <Route path="savedlistings" component={SavedListings}/>
    <Route path="chat" component={Chat}/>
    <Route path="auth" component={Auth}/>
  </Route>
);



document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
