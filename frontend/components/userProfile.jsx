var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var ProfileStore = require('../stores/profile');

function _getProfile(){
  return ProfileStore.currentProfile();
}


var UserProfile = React.createClass({
  //Fetches User based on usertype prop, either current user or user in a chatroom.
  getInitialState: function(){
    profile = ApiUtil.fetchProfile(this.props.user)
    return {id: NaN, profile_picture: "", username: "", description: ""};
  },

  _profileChanged: function(){
    profile = _getProfile()
    this.setState({id: profile.id, profile_picture: profile.profile_picture, username: profile.username, description: profile.description});
  },
  //Adds a listeneer and fetches User on mount based on usertype prop, either current user or user in a chatroom.
  componentDidMount: function(){
    this.updates = false;
    this.profileListener = ProfileStore.addListener(this._profileChanged);
    ApiUtil.fetchProfile(this.props.user);
  },
  // Commit any profile changes.
  componentWillUnmount: function(){
    if (this.updates = true) {
      ApiUtil.commitProfileChanges(this.state);
    }
    this.profileListener.remove();
  },

  cloudinaryUpload: function(){
    that = this;
     cloudinary.openUploadWidget({ cloud_name: 'roomieup-com', upload_preset: 'fkttonkf'},
       function(error, result) {
        if(error === null){
          this.updates = true;
          that.setState({profile_picture: result[0].url})
        }
      });
  },

  handleDescriptionChange: function(event){
    this.updates = true;
    this.setState({description: event.target.value});
  },

  renderProfile: function(){
    if(this.state.profile_picture === ""){
      return
    } else {
      return (
        <div>
          <img className="profilephoto" src={this.state.profile_picture}/>
          <button onClick={this.cloudinaryUpload}>Change Profile Photo</button>
          <h2>{this.state.username}</h2>
          <p>{this.state.description}</p>
          <label>Profile Description:</label>
            <textarea className="form-control" name="description" ref="description" required type="number" value={this.state.description}
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
