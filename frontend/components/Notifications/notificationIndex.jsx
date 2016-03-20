var React = require('react');
var NotificationStore = require('../../stores/notifications');
var ApiUtil = require('../../util/apiUtil');
var ApiActions = require('../../actions/apiActions');

function _getAllNotifications() {
  return NotificationStore.all();
}

var NotificationIndex = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  _notificationsChanged: function(){
    this.setState({notifications: _getAllNotifications()});
  },
  getInitialState: function(){
    return {
      notifications: _getAllNotifications(),
    };
  },
  componentDidMount: function(){
    this.notificationListener = NotificationStore.addListener(this._notificationsChanged);
    ApiUtil.fetchNotifications();
  },
  componentWillUnmount: function(){
    this.notificationListener.remove();
  },
  renderNotifications: function() {
    return (
      this.state.notifications.map(function(notification, idx){
          return(
            <li className="notification" key={idx}>
              <p className="notificationText">{notification.notification}</p>
            </li>
          )
      })
    )
  },
  render: function(){
    return(
        <ul className="notificationList">
          <li className='notificationHead'>Notifications:</li>
          {this.renderNotifications()}
        </ul>
    );
  }
});

module.exports = NotificationIndex
