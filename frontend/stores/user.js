var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var UserConstants = require('../constants/userConstants');

var UserStore = new Store(AppDispatcher);

var _user = {};
 

var loadUser = function (user) {
  _user = user;
};


UserStore.currentUser = function () {
//
}

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.USER_RECEIVED:
      loadUser(payload.listings);
      loadSavedListings()
      UserStore.__emitChange();
      break;

  }
}

module.exports = UserStore;
