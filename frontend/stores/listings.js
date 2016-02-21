var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var ListingsConstants = require('../constants/pokemonConstants.js');
var ListingStore = new Store(AppDispatcher);

var _listings = {};

var resetListings = function (listings) {
  _listings = {};
  listings.forEach(function (listing) {
    _listings[listing.id] = listing;
  });
};


ListingStore.all = function () {
  var listings = [];
  for (var id in _listings) {
    listings.push(_listings[id]);
  }
  return pokemons;
}

ListingStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ListingConstants.LISTINGS_RECEIVED:
      resetListings(payload.listings);
      ListingStore.__emitChange();
      break;

  }
}

module.exports = PokemonStore;
