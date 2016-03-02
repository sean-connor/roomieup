var React = require('react');
var ChatStore = require('../../stores/chats');
var ApiUtil = require('../../util/apiUtil');
var MessageIndex = require('./messageIndex');
var MessageForm = require('./messageForm');

var Chat = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function(){
    return {messages: ""}
  },
  componentDidMount: function(){
    this.selected = "";
  },
  componentWillUnmount: function(){
  },
  renderMessages: function(event) {
    event.preventDefault();
    this.setState({
      messages: ""
    })
    if (event.target.innerHTML !== this.selected) {
      this.selected = event.target.innerHTML;
      this.setState(
        {messages:
              <div className="messageGroup">
                <MessageIndex chatId={this.props.id}/>
                <MessageForm chatId={this.props.id}/>
              </div>
        }
      )
    } else {
      this.selected = "";
    }
  },
  render: function(){
    return(
      <div className="chatItem">
        <h2 className="chatName" onClick={this.renderMessages}> {this.props.title} &#9660; </h2>
        {this.state.messages}
      </div>
    );
  }
});

module.exports = Chat
