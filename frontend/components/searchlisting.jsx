var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var SearchListingForm = require('./Listings/searchListingForm');
var SearchListingIndex = require("./Listings/searchListingIndex");
var SearchListingMap = require('./Listings/searchListingMap');
var Search = require('./ListingsTest/search');
module.exports = React.createClass({

render: function(){
  return(
    <div className="main">
      <Search/>
    </div>
  )
}

})
