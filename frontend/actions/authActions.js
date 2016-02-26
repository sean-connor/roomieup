var AppDispatcher = require('../dispatcher');
var AuthConstants = require('../constants/AuthConstants');

var authActions = {

  receiveCreateError: function(data) {
    AppDispatcher.dispatch({
      actionType: AuthConstants.RECEIVE_CREATE_ERROR,
      data: data
    });
  },

  receiveLogin: function(data) {
    AppDispatcher.dispatch({
      actionType: AuthConstants.RECEIVE_LOGIN_SUCCESS,
      data: data
    });
  },

  receiveLoginError: function(data) {
    AppDispatcher.dispatch({
      actionType: AuthConstants.RECEIVE_LOGIN_ERROR,
      data: data
    });
  },

  receiveLogout: function(data) {
    AppDispatcher.dispatch({
      actionType: AuthConstants.RECEIVE_LOGOUT_SUCCESS,
      data: data
    });
  },

  receiveLogoutError: function(data) {
    AppDispatcher.dispatch({
      actionType: AuthConstants.RECEIVE_LOGOUT_ERROR,
      data: data
    });
  }

};

module.exports = authActions;
