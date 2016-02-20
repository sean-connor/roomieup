var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var Link = require('react-router').Link;

module.exports = React.createClass({

render: function(){
  return(
    <div>
      <ul>
        <li><Link to ={`/home`}>Honme</Link></li>
        <li><Link to ={`/searchlistings`}>Search Listings</Link></li>
        <li><Link to ={`/savedlistings`}>Saved Listings</Link></li>
        <li><Link to ={`/chat`}>Chat</Link></li>
      </ul>
    </div>
  )
}

})
