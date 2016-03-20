var React = require('react');
var MessageStore = require('../../stores/messages');
var ApiUtil = require('../../util/apiUtil');
var ApiActions = require('../../actions/apiActions');
var UserStore = require('../../stores/user');

function _getAllMessages() {
  return MessageStore.all();
}
function _getCurrentUser() {
  return UserStore.getUser();
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
    this.messageListener = MessageStore.addListener(this._messagesChanged);
    ApiUtil.fetchMessages(this.props.chatId);
  },
  componentWillUnmount: function(){
    this.messageListener.remove();
  },

  renderMessages: function() {
    var user = _getCurrentUser();
    var mymessage;
    var displayname;
    var colon;
    return (
      this.state.messages.map(function(message, idx){
        if(user.username === message.username){
          mymessage = true;
          displayname = "";
          colon = "";
        } else {
          mymessage = false;
          displayname = message.username;
          colon = ":";
        }
        return(
          <li className="message" id={mymessage} key={idx}>
            <p className="messageText" id={mymessage}>{displayname}{colon}&nbsp;{message.body}</p>
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
