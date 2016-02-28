var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var NotificationConstants = require('../constants/notificationConstants');

var NotificationStore = new Store(AppDispatcher);

var _notifications = [];

var resetNotifications = function (notifications) {
  _notifications = notifications;
};


NotificationStore.all = function () {
  return _notifications.slice(0);
}

NotificationStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case NotificationConstants.NOTIFICATIONS_RECEIVED:
      resetNotifications(payload.notifications);
      NotificationStore.__emitChange();
      break;
  }
}

module.exports = NotificationStore;
