var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var ListingConstants = require('../constants/listingsConstants');

var ListingStore = new Store(AppDispatcher);

var _listings = [];

var resetListings = function (listings) {
  _listings = listings;
};


ListingStore.all = function () {
  return _listings.slice(0);
}

ListingStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ListingConstants.LISTINGS_RECEIVED:
      resetListings(payload.listings);
      ListingStore.__emitChange();
      break;

  }
}

module.exports = ListingStore;
