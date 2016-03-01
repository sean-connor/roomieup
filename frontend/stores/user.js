var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var router = require('react-router');
var AuthConstants = require('../constants/authConstants');
var ProfileConstants = require('../constants/profileConstants')
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

var update = function(profile){
  if(_user["id"] === profile["id"]){
    _user["description"] = profile["description"];
    _user["profile_picture"] = profile["profile_picture"];
  }
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
    case (ProfileConstants.PROFILE_RECEIVED):
      update(payload.profile);
      break;
    }
};

module.exports = UserStore;
