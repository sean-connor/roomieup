var React = require('react');
var Nav = require('./nav');
var Footer = require('./footer');
var Auth = require('../util/authUtil');
var UserStore = require('../stores/user');
var Router = require('react-router');
var History = require('react-router').History;

module.exports = React.createClass({
  mixins: [Router.Navigation, History],
  getInitialState: function () {
    return {
      loggedIn: Auth.loggedIn()
      }
  },

  _userChanged: function(){
    if (Auth.loggedIn() !== this.loggedIn){
      this.setState({loggedIn: Auth.loggedIn()})
      if(Auth.loggedIn()){
        this.history.pushState(null, '/searchlistings');
      } else {
        this.history.pushState(null, '/splash');
      }
    }
  },

  componentWillUnmount: function(){
    this.userListener.remove();


  },
  componentWillMount: function() {
    Auth.checkSession();
    this.userListener = UserStore.addListener(this._userChanged);
    this._userChanged();
  },

  render: function () {
    return(
      <div className="appdiv">
        <Nav loggedIn={this.state.loggedIn}/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
})
