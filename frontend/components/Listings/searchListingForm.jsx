var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');

module.exports = React.createClass({
    maxPrice: function(event){
      FilterActions.updateMaxPrice(event.target.value);
    },
    minPrice: function (event) {
      FilterActions.updateMinPrice(event.target.value);
    },
    bedrooms: function (event) {
      FilterActions.updateBedrooms(event.target.value);
    },
    currentMax: function(){
      return this.props.filterParams.maxSeating;
    },
    currentMin: function(){
      return this.props.filterParams.minSeating;
    },
    currentBedrooms: function(){
      return this.props.filterParams.minSeating;
    },
    updateSeating: function (min, max) {
      FilterActions.updateParams({
        seating: {min: min, max: max}
      });
    },

    render: function() {
      return (
        <div className='form'>
          <form className="indexForm" action="" onSubmit={this.handleSubmit}>

            <h3>Price:</h3>
            <div className="form-group">
              <label>Min:</label>
              <input className="form-control" name="minprice" ref="minprice" type="number" value={this.state.minprice}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label>Max:</label>
              <input className="form-control" name="maxprice" ref="maxprice" type="number" value={this.state.maxprice}
                onChange={this.handleChange}/>
            </div>
            <h3>Bedrooms:</h3>

            <div className="form-group">
              <label>Bedrooms:</label>
              <input className="form-control" name="bedroom" ref="bedroom" required type="number" value={this.state.bedroom}
                onChange={this.handleChange}/>
            </div>
            <br/>
            <div className="form-group">
              <button className="btn-search" type="submit">Search</button>
            </div>
          </form>
        </div>
      );
    }
  });
