var userServerActions = require('../actions/authActions.js');

var userUtils = {
  createUser: function(user) {
    $.ajax({
      method: "POST",
      url: "api/users",
      data: {
        user: {
          username: user.username,
          password: user.password
        }
      },
      success: function(res) {
        userServerActions.receiveLogin(res);
      },
      error: function(res) {
        userServerActions.receiveLogoutError(res);
      }
    });
  },
};

module.exports = userUtils;
