var ApiActions = require('../actions/apiActions');
var FilterParamsStore = require('../stores/filter_params');

module.exports = {
  //LISTINGS GROUP
  //Fetches Listings prompted by the search listings form
  fetchListings: function(){
    var filter = FilterParamsStore.params();
    $.get("api/listings", filter, function(matchedListings){
          ApiActions.receiveListings(matchedListings);
      }
    )
  },
  fetchSavedListings: function(){
    $.ajax({
      url: "api/savedlistings",
      success: function(savedListings){
          ApiActions.receiveSavedListings(savedListings);
      }
    })
  },
  saveListing: function(listing){
      $.post({
      url: "api/savedlistings",
      data: {listing_id: listing.id},
      success: function(response){
          ApiActions.receiveSavedListing(listing);
      }
    })
  },
  destroyUserListing: function(listing){
      var listingId = listing.id;
      $.ajax({
      url: "api/savedlistings/delete",
      type: 'DELETE',
      data: {listing_id: listingId},
      success: function(){
        ApiActions.notifyDeletion(listingId);
      },
      error: function(){
        console.log('Unsuccessful Delete');
      }
    })
  },
  //USERS GROUP
  createUser: function (user, callback) {
    $.ajax({
      url: "api/users",
      method: "POST",
      data: {user: user},
      success: function (user) {
        UserActions.receiveSingleUser(user);
        callback && callback(user.id);
      },
      error: function (errors) {
        ErrorActions.receiveErrors(errors);
      }
    });
  },
  createSession: function (user, callback) {
    $.ajax({
      url: "api/session",
      method: "POST",
      data: {user: user},
      success: function (user) {
        UserActions.receiveSingleUser(user);
        callback && callback(user.id);
      },
      error: function (errors) {
        ErrorActions.receiveErrors(errors);
      }
    });
  },
  deleteSession: function (callback) {
    $.ajax({
      url: "api/session",
      method: "DELETE",
      success: function (loggedOutUser) {
        UserActions.removeSingleUser();
        callback && callback(loggedOutUser);
        }
      });
    },
  readSession: function (user, callback) {
    $.ajax({
      url: "api/session",
      method: "GET",
      success: function (user) {
        UserActions.receiveSingleUser(user);
        callback && callback(user.id);
        }
      });
    },

  fetchProfile: function(user){
    $.ajax({
      url: "api/users",
      data: {user: user},
      success: function(profile){
          ApiActions.receiveProfile(profile);
      }
    })
  },
  commitProfileChanges: function(profileState){
    $.ajax({
      type: "PATCH",
      url: "api/users/" +profileState.id,
      data: profileState,
      success: function(){
          ApiActions.receiveProfile(profileState);
      }
    })
  },
  //CHAT GROUP
  fetchChats: function(){
      $.get("api/chats", function(chats){
          ApiActions.receiveChats(chats);
      }
    )
  },
  fetchMessages: function(chat_id){
      $.get("api/messages", {chat_id: chat_id}, function(messages){
          ApiActions.receiveMessages(messages);
      }
    )
  },
  saveMessage: function(message){
      var that = this;
      $.post({
      url: "api/messages",
      data: message,
      success: function(){
          that.fetchMessages(message.chat_id);
      }
    })
  },
  fetchProfiles: function(user){
    $.ajax({
      url: "api/users",
      data: {user: user},
      success: function(profile){
          ApiActions.receiveProfile(profile);
      }
    })
  },
  fetchNotifications: function(){
      $.get("api/notifications", function(notifications){
          ApiActions.receiveNotifications(notifications);
      }
    )
  }
}
