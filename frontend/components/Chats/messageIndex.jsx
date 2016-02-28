var React = require('react');
var MessageStore = require('../../stores/messages');
var ApiUtil = require('../../util/apiUtil');

function _getAllMessages() {
  return MessageStore.all();
}

var MessageIndex = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  _messagesChanged: function(){
    this.setState({messages: _getAllMessages()});
  },
  getInitialState: function(){
    return {
      messages: _getAllMessages(),
    };
  },
  componentDidMount: function(){
    console.log("Message Index Mounted");
    this.messageListener = MessageStore.addListener(this._messagesChanged);
    ApiUtil.fetchMessages(this.props.chatId);
  },
  componentWillUnmount: function(){
    console.log("Message Index Unmounted");
    this.messageListener.remove();
  },
  renderMessages: function() {
    return (
      this.state.messages.map(function(message, idx){
          return(
            <li className="message" key={idx}>
              <p className="messageText">{message.body}</p>
            </li>
          )
      })
    )
  },
  render: function(){
    return(
        <ul className="messageList">
          {this.renderMessages()}
        </ul>
    );
  }
});

module.exports = MessageIndex
