var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var ProfileConstants = require('../constants/profileConstants');

var ProfileStore = new Store(AppDispatcher);

var _profile = {};


var loadProfile = function (profile) {
  _profile = profile;
};


ProfileStore.currentProfile = function () {
  var copyProfile = jQuery.extend(true, {}, _profile);
  return copyProfile;
}

ProfileStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ProfileConstants.PROFILE_RECEIVED:
      loadProfile(payload.profile);
      ProfileStore.__emitChange();
      break;

  }
}

module.exports = ProfileStore;
