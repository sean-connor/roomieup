var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var UserStore = require('../../stores/user');

function _getProfile(){
  return UserStore.getUser();
}


var UserProfile = React.createClass({
  //Fetches User based on usertype prop, either current user or user in a chatroom.
  getInitialState: function(){
    this.updates = false;
    var profile = _getProfile();
    return ({id: profile.id, profile_picture: profile.profile_picture, username: profile.username, description: profile.description});
  },

  _profileChanged: function(){
    profile = _getProfile()
    this.setState({id: profile.id, profile_picture: profile.profile_picture, username: profile.username, description: profile.description});
  },
  //Adds a listeneer and fetches User on mount based on usertype prop, either current user or user in a chatroom.

  // Commit any profile changes.
  componentWillUnmount: function(){
    ApiUtil.commitProfileChanges(this.state);
  },
  componentDidMount: function(){
  },
  cloudinaryUpload: function(){
    var that = this;
     cloudinary.openUploadWidget({ cloud_name: 'roomieup-com', upload_preset: 'fkttonkf', theme: 'white'},
       function(error, result) {
        if(error === null){
          that.updates = true;
          that.setState({profile_picture: result[0].url})
        }
      });
  },

  handleDescriptionChange: function(event){
    event.preventDefault();
    this.updates = true;
    this.setState({description: event.target.value});
  },

  renderProfile: function(){
    if(this.state.profile_picture === undefined){
      return
    } else {
      return (
        <div>
          <img className="profilephoto" src={this.state.profile_picture}/>
          <br/>
          <div className="photo-btn" onClick={this.cloudinaryUpload}></div>
          <br/>
          <h2 className="usernamedisp">{this.state.username}</h2>
          <br/>
          <label>Profile Description:</label>
          <br/>
          <textarea className="profdesc" name="description" ref="description" required type="number" value={this.state.description}
               onChange={this.handleDescriptionChange}/>
        </div>
      )
    }
  },

  render: function(){
    return(
      <div className="profile">
        {this.renderProfile()}
      </div>
    )
  }

  })

module.exports = UserProfile;
