var React = require('react');
var Nav = require('./nav');
var Footer = require('./footer');
var Auth = require('../util/authUtil');
var UserStore = require('../stores/user');
var Router = require('react-router');
var History = require('react-router').History;

App = React.createClass({
  mixins: [Router.Navigation, History],
  getInitialState() {
    console.log("FETCH LOGGED IN");
    return {
      loggedIn: Auth.loggedIn()
      }
  },

  _userChanged: function(){
    console.log("USER SIGN IN / SIGN OUT");
    if (Auth.loggedIn() !== this.loggedIn){
      this.setState({loggedIn: Auth.loggedIn()})
      if(Auth.loggedIn()){
        this.history.pushState(null, '/home');
      } else {
        this.history.pushState(null, '/auth');
      }
    }
  },

  componentWillUnmount: function(){
    this.userListener.remove();
  },
  componentWillMount: function() {
    Auth.checkSession();
    this.userListener = UserStore.addListener(this._userChanged);
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
});

module.exports = App;
