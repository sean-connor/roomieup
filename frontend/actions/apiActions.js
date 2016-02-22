var AppDispatcher = require('../dispatcher');
var ListingsConstants = require('../constants/listingsConstants.js');
ApiActions = {
  receiveNokoRes: function(listings){
    AppDispatcher.dispatch({
      actionType: ListingsConstants.LISTINGS_RECEIVED,
      listings: listings
    })
  }
}

module.exports = ApiActions;
