var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var SavedListingIndex = require('./Listings/savedListingIndex');
module.exports = React.createClass({

render: function(){
  return(
    <div className="main">
      <SavedListingIndex/>
    </div>
  )
}

})
