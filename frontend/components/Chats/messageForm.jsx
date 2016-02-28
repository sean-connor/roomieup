var React = require('react');
var Router = require('react-router');
var ApiUtil = require('../../util/apiUtil');
var MessageForm = React.createClass({
  getInitialState: function() {
    return ({
      body: ""
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    ApiUtil.saveMessage({
        body: this.state.body,
        chat_id: this.props.chatId
    });
  },

  handleChange: function(event) {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  },


  render: function() {
    return (
      <form className="messageForm" onSubmit={this.handleSubmit}>
        <input className="messageInput" onChange={this.handleChange}
          type="text"
          name="body"
          placeholder="Message"/>
        <button className="messageSubmit" type="submit">Send</button>
      </form>
    );
  }
});

module.exports = MessageForm;
