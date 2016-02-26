
var authActions = require('../actions/authActions.js');

var sessionApiUtils = {
  createSession: function(user) {
    $.ajax({
      method: "POST",
      url: "api/session",
      data: {
        user: {
          username: user.username,
          password: user.password
        }
      },
      success: function(res) {
        authActions.receiveLogin(res);
      },
      error: function(res) {
        authActions.receiveLoginError(res);
      }
    });
  },
  checkSession: function(token) {
    $.ajax({
      method: "POST",
      url: "api/session",
      data: {
        token: token
      },
      success: function(res) {
        authActions.receiveLogin(res);
      },
      error: function(res) {
        authActions.receiveLoginError(res);
      }
    });

  },
  destroySession: function() {
    $.ajax({
      method: "DELETE",
      url: "api/session",
      success: function(res) {
        authActions.receiveLogout(res);
      },
      error: function(res) {
        authActions.receiveLogoutError(res);
      }
    });
  }
};

module.exports = sessionApiUtils;
