var SessionUtil = require('../util/sessionUtil.js');

var SessionActions = {
  checktoken: function(token) {
    SessionUtil.function(token);
  },
  login: function(user) {
    SessionUtil.createSession(user);
  },

  logout: function() {
    SessionUtil.destroySession();
  }
};

module.exports = SessionActions;
