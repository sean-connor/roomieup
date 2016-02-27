var React = require('react');
var ReactRouter = require('react-router');
var ListingIndexItemImage = require('../Listings/listingIndexItemImage');

var Listing = React.createClass({
  saveListing: function(event){
    event.preventDefault();
    ApiUtil.saveListing(this.props.listing);
  },
  render: function () {
    var Link = ReactRouter.Link;
    var listing = this.props.listing;
    return (
      <div className="listContainer">
        <ListingIndexItemImage key={listing.id} images={listing.imagelistings}/>
        <p>Title: {listing.title}</p>
        <p>Price: {listing.price}</p>
        <p>Bedrooms: {listing.bedroom}</p>
        <p className="list-btn" onClick={this.saveListing}>Save</p>)
      </div>
    );
  }
});

module.exports = Listing;
