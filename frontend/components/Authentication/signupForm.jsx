var React = require('react');

// Actions
var UserActions = require('../../actions/userActions');
var SessionActions = require('../../actions/sessionActions');

var Signup = React.createClass({
  getInitialState: function() {
    return ({
      username: "",
      password: ""
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    if(event.target.name === "signup"){
      UserActions.create({
          username: this.state.username,
          password: this.state.password
      });
    } else if(event.target.name === "signin"){
      SessionActions.login({
          username: this.state.username,
          password: this.state.password
      });
    } else if(event.target.name === "guest"){
      SessionActions.login({
          username: "guest",
          password: "password"
      })
    }
  },

  handleChange: function(event) {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  },

  render: function() {
    return (
      <div>
      <form className="signup" onSubmit={this.handleSubmit}>

        <label className="form-label">Username:</label>
        <input className="form-input" onChange={this.handleChange}
          type="username"
          name="username"
          placeholder="Username"/>
        <br></br>
        <label className="form-label">Password:</label>
        <input className="form-input" onChange={this.handleChange}
          type="password"
          name="password"
          placeholder="Password"/>
        <br></br>
        <button className="form-submit" name="signup" type="submit">Sign Up</button>
        <button className="form-submit" name="signin" type="submit">Sign In</button>
      </form>
      <button className="form-submit" name="guest" onClick={this.handleSubmit}>Guest</button>
      </div>
    );
  }

});

module.exports = Signup;
