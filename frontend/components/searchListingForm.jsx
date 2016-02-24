var React = require('react');
var ApiUtil = require('../util/apiUtil.js');

module.exports = React.createClass({

    getInitialState: function() {
      return {
        minprice: NaN,
        maxprice: NaN,
        bedroom: NaN
      };
    },
    handleSubmit: function (event) {
      event.preventDefault();
      ApiUtil.fetchListings(this.state);
    },

    handleChange: function (event){
      this.setState({[event.target.name]: event.target.value})
    },

    render: function() {
      return (
        <div>
          <form className="indexForm" action="" onSubmit={this.handleSubmit}>

            <h3>Price:</h3>
            <div className="form-group">
              <label htmlFor="website">Min:</label>
              <input className="form-control" name="minprice" ref="minprice" type="number" value={this.state.minprice}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="website">Max:</label>
              <input className="form-control" name="maxprice" ref="maxprice" type="number" value={this.state.maxprice}
                onChange={this.handleChange}/>
            </div>
            <h3>Bedrooms:</h3>

            <div className="form-group">
              <label htmlFor="phone">Bedrooms:</label>
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
