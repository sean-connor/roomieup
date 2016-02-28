var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var ChatConstants = require('../constants/chatConstants');

var MessageStore = new Store(AppDispatcher);

var _messages = [];

var resetMessages = function (messages) {
  _messages = messages;
};


MessageStore.all = function () {
  return _messages.slice(0);
}

MessageStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ChatConstants.MESSAGES_RECEIVED:
      resetMessages(payload.messages);
      MessageStore.__emitChange();
      break;
  
  }
}

module.exports = MessageStore;
