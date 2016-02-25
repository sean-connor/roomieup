var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var UserProfile = require('./userProfile.jsx');

module.exports = React.createClass({

render: function(){
  return(
    <div className="contentpane">
      <UserProfile user={"current"}/>
    </div>
  )
}

})
