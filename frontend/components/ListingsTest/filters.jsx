var React = require('react');
var FilterActions = require('../../actions/filter_actions');

var Filters = React.createClass({
  maxPriceChanged: function(e){
    FilterActions.updateMaxPrice(e.target.value);
  },
  minPriceChanged: function (e) {
    FilterActions.updateMinPrice(e.target.value);
  },
  bedroomsChanged: function(e) {
    FilterActions.updateBedrooms(e.target.value);
  },
  currentMaxPrice: function(){
    return this.props.filterParams.maxPrice;
  },
  currentMinPrice: function(){
    return this.props.filterParams.minPrice;
  },
  currentBedrooms: function(){
    return this.props.filterParams.bedrooms;
  },
  // updatePricing: function (min, max) {
  //   FilterActions.updateParams({
  //     pricing: {min: min, max: max}
  //   });
  // },
  render: function(){
    return (
      <div>
        <label>Minimum Price</label>
        <input type="number"
          onChange={this.minPriceChanged}
          value={this.currentMinPrice()}/>
         <br/>
        <label>Maximum Price</label>
        <input type="number"
          onChange={this.maxPriceChanged}
          value={this.currentMaxPrice()}/>
        <label>Bedrooms</label>
        <input type="number"
          onChange={this.bedroomsChanged}
          value={this.currentBedrooms()}/>
      </div>
    );
  }
});

module.exports = Filters;
