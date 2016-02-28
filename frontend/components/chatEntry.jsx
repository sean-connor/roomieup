var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var ChatIndex = require('./Chats/chatIndex');
module.exports = React.createClass({

render: function(){
  return(
    <div className="chatpane">
      <ChatIndex/>
    </div>
  )
}

})
