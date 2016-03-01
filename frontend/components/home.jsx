var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var UserProfile = require('./Profile/userProfile.jsx');
var NotificationIndex = require('./Notifications/notificationIndex');

module.exports = React.createClass({

render: function(){
  return(
    <div className="wrapper">
      <UserProfile user={"current"}/>
      <NotificationIndex/>
    </div>
  )
}

})
