var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var router = require('react-router');
var AuthConstants = require('../constants/AuthConstants');

var _user = {};

var UserStore = new Store(AppDispatcher);
UserStore.signedIn = function() {
  if (_user.signed_in) {
    return true;
  } else {
    return false;
  }
};
UserStore.getUser = function() {
  return _user;
};

var error = function(data) {
  console.log(data.error);
  _user = {};
};

var handleLogin = function(data) {
  localStorage.token = data.token;
  _user = data;
  _user['signed_in'] = true;
};


var handleLogout = function(data) {
  localStorage.clear();
  _user = {};
};

UserStore.__onDispatch = function(payload) {

  switch(payload.actionType){

    case (AuthConstants.RECEIVE_CREATE_ERROR):
      error(payload.data);
      this.__emitChange();
      break;

    case (AuthConstants.RECEIVE_LOGIN_SUCCESS):
      handleLogin(payload.data);
      this.__emitChange();
      break;

    case (AuthConstants.RECEIVE_LOGIN_ERROR):
      error(payload.data);
      this.__emitChange();
      break;

    case (AuthConstants.RECEIVE_LOGOUT_SUCCESS):
      handleLogout(payload.data);
      this.__emitChange();
      break;

    case (AuthConstants.RECEIVE_LOGOUT_ERROR):
      error(payload.data);
      this.__emitChange();
      break;

  }
};

module.exports = UserStore;
