var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var ListingConstants = require('../constants/listingsConstants');

var SavedListingStore = new Store(AppDispatcher);

var _listings = [];

var resetListings = function (listings) {
  _listings = listings;
}
SavedListingStore.isListingSaved = function(id){
  _listings.forEach(function(listing, idx){
    if(listing.id === id) {
      console.log("listing is saved");
      return true;
    }
  })
  return false;
}

var deleteListing = function(id) {
  var spliceIdx = NaN;
  _listings.forEach(function(listing, idx){
    if (listing.id === id) {
      spliceIdx = idx;
    }
  })
  if (spliceIdx !== NaN){
    _listings.splice(spliceIdx, 1)
  }
}

SavedListingStore.all = function () {
  return _listings.slice(0);
}

SavedListingStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ListingConstants.SAVED_LISTINGS_RECEIVED:
      resetListings(payload.listings);
      SavedListingStore.__emitChange();
      break;
    case ListingConstants.SAVED_LISTING_DELETED:
      deleteListing(payload.id);
      SavedListingStore.__emitChange();
      break;
    }
  }

module.exports = SavedListingStore;
