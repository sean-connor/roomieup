var React = require('react');
var MessageStore = require('../../stores/messages');
var ApiUtil = require('../../util/apiUtil');
var ApiActions = require('../../actions/apiActions');

function _getAllMessages() {
  return MessageStore.all();
}

var MessageIndex = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  _messagesChanged: function(){
    var messages = _getAllMessages();
    if (messages.length === 0) {
      var chatId = this.props.chatId;
    } else {
      var chatId = messages[0].chat_id;
    }

    if (chatId === this.props.chatId) {
      this.setState({messages: _getAllMessages()});
    }

  },
  getInitialState: function(){
    return {
      messages: _getAllMessages(),
    };
  },
  componentWillMount: function(){
    // ApiActions.resetMessages();
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
