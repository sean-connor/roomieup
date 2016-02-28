var React = require('react');
var ChatStore = require('../../stores/chats');
var ApiUtil = require('../../util/apiUtil');
var Chat = require('./chat.jsx');

function _getAllChats() {
  return ChatStore.all();
}

var ChatIndex = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  _chatsChanged: function(){
    this.setState({chats: _getAllChats()});
  },
  getInitialState: function(){
    return {
      chats: _getAllChats(),
    };
  },
  componentDidMount: function(){
    console.log("Chat Index Mounted");
    this.chatListener = ChatStore.addListener(this._chatsChanged);
    ApiUtil.fetchChats();
  },
  componentWillUnmount: function(){
    console.log("Chat Index Unmounted");
    this.chatListener.remove();
  },
  renderChats: function() {
    return (
      this.state.chats.map(function(chat, idx){
          return(
            <li className="chatTitle" key={idx}>
                <Chat title={chat.title} id={chat.id}/>
            </li>
          )
      })
    )
  },
  render: function(){
    return(
      <div className="chatIndex">
        <h1>Chats:</h1>
        <ul className="chatList">
          {this.renderChats()}
        </ul>
      </div>
    );
  }
});

module.exports = ChatIndex
