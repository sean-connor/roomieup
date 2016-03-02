var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var UserStore = require('../../stores/user');

function _getProfile(){
  return UserStore.getUser();
}


var UserPreference = React.createClass({
//   getInitialState: function(){
//     this.updates = false;
//     var profile = _getProfile();
//     return ({id: profile.id, timepref: profile.timepref, cleanpref: profile.cleanpref, socialpref: profile.socialpref});
//   },
//
//   _profileChanged: function(){
//     profile = _getProfile()
//     this.setState({id: profile.id, timepref: profile.timepref, cleanpref: profile.cleanpref, socialpref: profile.socialpref});
//   },
//   //Adds a listeneer and fetches User on mount based on usertype prop, either current user or user in a chatroom.
//
//   // Commit any profile changes.
//   componentWillUnmount: function(){
//   },
//   componentDidMount: function(){
//     console.log("Profile Preferences Mounting.");
//   },
//   timeprefChanged: function(e){
//     e.preventDefault();
//     this.state.timepref = e.target.value
//   },
//   cleanprefChanged: function (e) {
//     e.preventDefault();
//     this.state.cleanpref = e.target.value
//   },
//   socialprefChanged: function(e) {
//     e.preventDefault();
//     this.state.socialpref = e.target.value
//   },

  render: function(){
    return(
      <div className="pref-group">
        <h1 className="pref-header">Roommate Preferences</h1>
        <div className="preferences">
          <div className="pref-div">
            <label>Morning - Evening</label>
            <input className="searchBox" type="range" min="1" max="10" step="1" defaultValue="5" />
          </div>
          <div className="pref-div">
            <label>Messy - Tidy</label>
            <input className="searchBox" type="range" min="1" max="10" step="1" defaultValue="5" />
          </div>
          <div className="pref-div">
            <label>Home - Out</label>
            <input className="searchBox" type="range" min="1" max="10" step="1" defaultValue="5" />
          </div>
        </div>
      </div>
    )
  }

  })

module.exports = UserPreference;
