var React = require('react');
var ListingIndexItemImage = require('./listingIndexItemImage');
var History = require('react-router').History;
var ApiUtil = require('../../util/apiUtil.js');
var UserStore = require('../../stores/user');
module.exports = React.createClass({
  //mixins: [History],

  showDetail: function () {
    //this.history.pushState(null, '/listing/' + this.props.listing.id, {});
  },
  editListing: function(event){
    event.preventDefault();
    if(event.target.innerHTML === "Save"){
      ApiUtil.saveListing(this.props.listing);
    } else {
      ApiUtil.destroyUserListing(this.props.listing);
    }
  },
  renderEditButton: function(){
    if(UserStore.signedIn()){
      return(<p className="list-btn" onClick={this.editListing}>{this.props.action}</p>)
    }
  },

  render: function () {
    return(
      <li onClick={this.showDetail} className="listing-index-item">
        <div className="listContainer">
          <ListingIndexItemImage key={this.props.listing.id} images={this.props.listing.imagelistings}/>
          <p className="title">{this.props.listing.title}</p>
          <p className="price">${this.props.listing.price}</p>
          <p className="bedroom">Bedrooms: {this.props.listing.bedroom}</p>
          {this.renderEditButton()}
        </div>
      </li>
    );
  }

})
