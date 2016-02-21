var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var Link = require('react-router').Link;

module.exports = React.createClass({

render: function(){
  return(
    <div className="navbar">
      <ul className="navul">
        <li className="navli"><Link to ={`/home`}><div className="home"></div></Link></li>
        <li className="navli"><Link to ={`/searchlistings`}><div className="searchListings"></div></Link></li>
        <li className="navli"><Link to ={`/savedlistings`}><div className="saved"></div></Link></li>
        <li className="navli"><Link to ={`/chat`}><div className="chat"></div></Link></li>
      </ul>
    </div>
  )
}

})
