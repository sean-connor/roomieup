var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var Auth = require('./auth');
var Link = require('react-router').Link;
module.exports = React.createClass({


renderLoggedOut: function(){
  return(
    <ul className="navul-login">
      <li className="navli loginli"><Link to ={"/auth"}><div className="login"></div></Link><p className="navDescIn">Login</p></li>
    </ul>
  )
},


renderLoggedIn: function(){
  return(
    <ul className="navul">
      <li className="navli">
        <Link to ={"/home"}>
          <div className="home">
          </div>
        </Link>
        <p className="navDesc">Profile</p>
      </li>
      <li className="navli">
        <Link to ={"/searchlistings"}>
          <div className="searchListings">
          </div>
        </Link>
        <p className="navDesc">Search</p>
      </li>
      <li className="navli">
        <Link to ={"/chat"}>
          <div className="chat">
          </div>
        </Link>
        <p className="navDesc">Messages</p>
      </li>
      <li className="navli logoutli">
        <a>
          <Auth/>
        </a>
        <p className="navDesc">Logout</p>
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

});
