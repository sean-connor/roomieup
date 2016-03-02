var React = require('react');
var Auth = require('./auth');

var Splash = React.createClass({

  render: function() {
    return (
      <div className="splash-main">
        <div className="splash-video">
          <div className="splash-header-group">
            <h1 className="splash-header">find space,</h1>
            <h1 className="splash-header">connect,</h1>
            <h1 className="splash-header">launch.</h1>
          </div>
        </div>
        <div className="splash-down">
          <div className="downarrow">&#9660;</div>

        </div>
        <div className="splash-about">
          <h2 className="splash-about-header">finding a place to live is difficult, let's change that.</h2>
          <div className="splash-about-row">
            <div className="about-row">
              <div className="searchListings-splash"></div>
              <h3>find space.</h3>
              <p>Search through apartment listings, based on price, availability and size.</p>
            </div>
            <div className="about-row">
              <div className="chat-splash"></div>
              <h3>connect.</h3>
              <p>Communicate with potential rooomamtes interested in the same apartment.</p>
            </div>
            <div className="about-row">
              <div className="splash-splash"></div>
              <h3>launch.</h3>
              <p>Enjoy!</p>
            </div>
          </div>
          <div className="about-down">
            <div className="downarrow">&#9660;</div>
          </div>
        </div>
        <div className="splash-login">
        <Auth/>
        </div>
        <div className="footer-splash">
          <span>Created by&nbsp;</span>
          <a className="gitlink" href="http://www.github.com/sean-connor/roomieup" target="_blank">
              <span>Sean Connor</span>
             <div className="giticon" ></div>
          </a>
        </div>
      </div>
    );
  }

});

module.exports = Splash;
