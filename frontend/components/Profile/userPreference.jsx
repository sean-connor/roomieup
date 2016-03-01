var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var UserStore = require('../../stores/user');

function _getProfile(){
  return UserStore.getUser();
}


var UserPreference = React.createClass({

  render: function(){
    return(
      <div className="pref-group">
        <h1 className="pref-header">Preferences</h1>
        <div className="preferences">
          <div className="pref-div">
            <label>Morning - Evening</label>
            <input className="searchBox" type="range" min="0" max="10" step="1" />
          </div>
          <div className="pref-div">
            <label>Messy - Tidy</label>
            <input className="searchBox" type="range" min="0" max="10" step="1" />
          </div>
          <div className="pref-div">
            <label>Home - Out</label>
            <input className="searchBox" type="range" min="0" max="10" step="1" />
          </div>
        </div>
      </div>
    )
  }

  })

module.exports = UserPreference;
