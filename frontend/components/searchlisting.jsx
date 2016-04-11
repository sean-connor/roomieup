var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var Search = require('./Listings/search');
module.exports = React.createClass({

render: function(){
  return(
    <div className="main">
      <Search/>
    </div>
  )
}

})
