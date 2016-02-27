var AppDispatcher = require('../dispatcher');
var FilterConstants = require('../constants/filter_constants');

var FilterActions = {
  updateBounds: function (bounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_BOUNDS,
      bounds: bounds
    });
  },
  updateMinPrice: function (value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MIN_PRICE,
      minPrice: value,
    });
  },
  updateMaxPrice: function (value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MAX_PRICE,
      maxPrice: value,
    });
  }
};

module.exports = FilterActions;
