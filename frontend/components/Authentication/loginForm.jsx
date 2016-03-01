var React = require('react');
var UserStore = require('../../stores/user');
var SessionActions = require('../../actions/sessionActions');
var Router = require('react-router');

var Login = React.createClass({
  mixins: [Router.Navigation],
  getInitialState: function() {
    return ({
      username: "",
      password: ""
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    SessionActions.login({
        username: this.state.username,
        password: this.state.password
    });
  },

  handleChange: function(event) {
    event.preventDefault();
    // this.setState({[event.target.name]: event.target.value});
  },


  render: function() {
    return (
      <form className="signin" onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>
        <label className="form-label">Username:</label>
        <input className="form-input" onChange={this.handleChange}
          type="text"
          name="username"
          placeholder="username"/>
        <br></br>
        <label className="form-label">Password:</label>
        <input className="form-input" onChange={this.handleChange}
          type="password"
          name="password"
          placeholder="password"/>
        <br></br>
        <button className="form-submit" type="submit"> Sign In </button>
      </form>
    );
  }
});

module.exports = Login;
