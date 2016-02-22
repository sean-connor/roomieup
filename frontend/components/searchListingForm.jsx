var React = require('react');
var ApiUtil = require('../util/apiUtil.js');

module.exports = React.createClass({

    getInitialState: function() {
      return {
        keyword: "room",
        miles: 2,
        zip: 94105,
        minprice: 1000,
        maxprice: 2000,
        br: 1,
        ba: 1
      };
    },
    handleSubmit: function () {

    },
    // sendFormData: function(){
    //   ApiUtil.receiveNokoReq(this.state);
    // },
    handleChange: function (){

    },

    render: function() {
      return (
        <div>
          <form action="" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="keywordsearch">Keyword Search:</label>
              <input className="form-control" name="keyword" ref="keyword" required type="text" value={this.state.keyword}
                onChange={this.handleChange}/>
            </div>
            <h3>Miles From Zipcode</h3>
            <div className="form-group">
              <label htmlFor="email">Miles:</label>
              <input className="form-control" name="miles" ref="miles" required type="number" value={this.state.miles}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="company">Zipcode:</label>
              <input className="form-control" name="zip" ref="zip" required type="number" value={this.state.zip}
                onChange={this.handleChange}/>
            </div>
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
            <div className="form-group">
              <label htmlFor="phone">Bedrooms:</label>
              <input className="form-control" name="br" ref="br" required type="number" value={this.state.br}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="website">Bathrooms:</label>
              <input className="form-control" name="ba" ref="ba" type="number" value={this.state.ba}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <button className="btn-search" type="submit">Search</button>
            </div>
          </form>
        </div>
      );
    }
  });
