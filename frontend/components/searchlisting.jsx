var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var SearchListingForm = require('./Listings/searchListingForm');
var SearchListingIndex = require("./Listings/searchListingIndex");
var SearchListingMap = require('./Listings/searchListingMap');

module.exports = React.createClass({

render: function(){
  return(
    <div className="main">
      <SearchListingMap />
      <div className="wrapper">
        <SearchListingForm />
        <SearchListingIndex />
      </div>
    </div>
  )
}

})
