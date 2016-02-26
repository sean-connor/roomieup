
var React = require('react');

var LoginForm = require('./Authentication/loginForm');
var SignupForm = require('./Authentication/signupForm');
var Logout = require('./Authentication/logout');
var UserStore = require('../stores/user');

var Auth = React.createClass({
  renderCheck :function(){
    if(UserStore.signedIn()){
      return(
        <div className="log">
          <Logout />
        </div>
      )
    } else {
        return(
          <div className="log">
                <SignupForm />
          </div>
        )
    }
  },
  render: function() {
    return (
      <div className="main">
        {this.renderCheck()}
        <p className="designLabel">Main</p>
      </div>
    );
  }

});

module.exports = Auth;
