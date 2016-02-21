var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var SearchListingForm = require('./searchListingForm');
var SearchListingIndex = require("./searchListingIndex");

module.exports = React.createClass({

render: function(){
  return(
    <div className="contentpane">
      <SearchListingForm/>
      <SearchListingIndex/>
    </div>
  )
}

})
