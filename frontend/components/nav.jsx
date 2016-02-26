var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var Auth = require('./auth');
var Link = require('react-router').Link;
module.exports = React.createClass({


renderLoggedOut: function(){
  return(
    <ul className="navul">
      <li className="navli"><Link to ={"/searchlistings"}><div className="searchListings"></div></Link></li>
      <li className="navli loginli"><Link to ={"/auth"}><div className="login"></div></Link></li>
    </ul>
  )
},

renderLoggedIn: function(){
  return(
    <ul className="navul">
      <li className="navli"><Link to ={"/home"}><div className="home"></div></Link></li>
      <li className="navli"><Link to ={"/searchlistings"}><div className="searchListings"></div></Link></li>
      <li className="navli"><Link to ={"/savedlistings"}><div className="saved"></div></Link></li>
      <li className="navli"><Link to ={"/chat"}><div className="chat"></div></Link></li>
      <li className="navli logoutli">
        <a>
          <div className="logout">
            <ul>
              <li className="logoutdrop">
                <Auth/>
              </li>
            </ul>
          </div>
        </a>
      </li>
    </ul>
  )
},

renderChoice: function(){
  if (this.props.loggedIn === true) {
    return this.renderLoggedIn();
  } else {
    return this.renderLoggedOut();
  }
},

render: function(){
  return(
    <div className="navbar">
      {this.renderChoice()}
    </div>
  )
}

})
