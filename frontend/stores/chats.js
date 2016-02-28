var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var ChatConstants = require('../constants/chatConstants');

var ChatStore = new Store(AppDispatcher);

var _chats = [];

var resetChats = function (chats) {
  _chats = chats;
};


ChatStore.all = function () {
  return _chats.slice(0);
}

ChatStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ChatConstants.CHATS_RECEIVED:
      resetChats(payload.chats);
      ChatStore.__emitChange();
      break;

  }
}

module.exports = ChatStore;
