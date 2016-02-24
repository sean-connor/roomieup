var React = require('react');
var ListingIndexItemImage = require('./listingIndexItemImage');
var History = require('react-router').History;
var ApiUtil = require('../util/apiUtil.js');

module.exports = React.createClass({
  //mixins: [History],

  showDetail: function () {
    //this.history.pushState(null, '/listing/' + this.props.listing.id, {});
  },
  editListing: function(event){
    if(event.target.innerHTML === "Save"){
      ApiUtil.saveListing(this.props.listing);
    } else {
      ApiUtil.destroyUserListing(this.props.listing);
    }
  },
  render: function () {
    return(
      <li onClick={this.showDetail} className="listing-index-item">
        <ListingIndexItemImage key={this.props.listing.id} images={this.props.listing.imagelistings}/>
        <p>Title: {this.props.listing.title}</p>
        <p>Price: {this.props.listing.price}</p>
        <p>Bedrooms: {this.props.listing.bedroom}</p>
        <p className="list-btn" onClick={this.editListing}>{this.props.action}</p>
      </li>
    );
  }

})
