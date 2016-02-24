var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var SavedListingIndex = require('./savedListingIndex');
module.exports = React.createClass({

render: function(){
  return(
    <div className="contentpane">
      <SavedListingIndex/>
    </div>
  )
}

})
