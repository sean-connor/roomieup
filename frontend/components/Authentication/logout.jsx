var React = require('react');
var UserStore = require('../../stores/user');
var sessionActions = require('../../actions/sessionActions');

var Logout = React.createClass({
  getInitialState: function() {
    return ({user: UserStore.getUser()});
  },
  handleChange: function() {
  this.setState({user: UserStore.getUser()});
},
  componentDidMount: function() {
    this.usListener = UserStore.addListener(this.handleChange);
  },

  componentWillUnmount: function() {
    this.usListener.remove();
  },

  userLoggedIn: function() {
      if (this.state.user.signed_in) {
        return <div>
                <p className="logoutButton" onClick={this.logout}>Logout</p>
              </div>;
      } else {
        return <p>You are Logged Out</p>;
      }
    },

    logout: function() {
      sessionActions.logout()
    },

  render: function() {
    return (
      <div  onClick={this.logout} className="logout"></div>
      
    );
  }

});

module.exports = Logout;
