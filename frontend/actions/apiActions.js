var AppDispatcher = require('../dispatcher');
var ListingConstants = require('../constants/listingsConstants');

var ApiActions = {
  //ReceiveListings is called as the success to a user's search
  receiveListings: function(listings){
    AppDispatcher.dispatch({
      actionType: ListingConstants.LISTINGS_RECEIVED,
      listings: listings
    });
  },
  //Occcurs Once on Sign In, listings added during session are handled via saveListing Action
  receiveSavedListings: function(listings){
    AppDispatcher.dispatch({
      actionType: ListingConstants.SAVED_LISTINGS_RECEIVED,
      listings: listings
    })
  },
  notifyDeletion: function(listingId){
    AppDispatcher.dispatch({
      actionType: ListingConstants.SAVED_LISTING_DELETED,
      id: listingId
    })
  }
}

module.exports = ApiActions;
