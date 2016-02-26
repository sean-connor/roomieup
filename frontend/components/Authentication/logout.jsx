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
        return <div>{this.state.user.username}
          <button onClick={this.logout}>logout</button>
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
      <div>
          {this.userLoggedIn()}
      </div>
    );
  }

});

module.exports = Logout;
