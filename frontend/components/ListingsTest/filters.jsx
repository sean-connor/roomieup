var React = require('react');
var FilterActions = require('../../actions/filter_actions');


var Filters = React.createClass({
  maxPriceChanged: function(e){
    e.preventDefault();
    var maxprice = e.target.value
    FilterActions.updateMaxPrice(maxprice);
  },
  minPriceChanged: function (e) {
    e.preventDefault();
    var minprice = e.target.value
    FilterActions.updateMinPrice(minprice);
  },
  bedroomsChanged: function(e) {
    e.preventDefault();
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
  togglePerBR: function(){
    this.perbedroom = !this.perbedroom;
  },

  componentDidMount: function(){
    this.perbedroom = false;
  },
  render: function(){
    return (
      <div className="listingForm">
        <div className="filter">
          <label>Price&nbsp;(${this.currentMaxPrice()})</label>
          <div className="form-price">
            <input className="searchBox" type="range" min="0" max="10000" step="100" value={this.currentMaxPrice()}  onChange={this.maxPriceChanged}/>

          </div>
        </div>
        <div className="filter">
          <label>Bedrooms</label>
          <div className="form-br">
            <input className="searchBox" type="number" step="1" value={this.currentBedrooms()} onChange={this.bedroomsChanged}/>
          </div>
        </div>
        <div className="filter-city">
          <label>City:&nbsp;</label>
          <div className="form-city">
            <select className="city" name="city">
              <option value="sfbay">San Francisco</option>
              <option value="nyc">New York City</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Filters;
