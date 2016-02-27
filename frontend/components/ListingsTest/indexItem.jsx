var React = require('react');
var ReactRouter = require('react-router');
var ApiUtil = require('../../util/apiUtil.js');
var ListingIndexItemImage = require('../Listings/listingIndexItemImage');

var IndexItem = React.createClass({
  mixins: [ReactRouter.history],

  saveListing: function(event){
    event.preventDefault();
    ApiUtil.saveListing(this.props.listing);
  },
  render: function(){
    var listing = this.props.listing;
    return (
        <li onClick={this.props.onClick} className="listing-index-item">
          <div className="listContainer">
            <ListingIndexItemImage key={listing.id} images={listing.imagelistings}/>
            <p>Title: {listing.title}</p>
            <p>Price: {listing.price}</p>
            <p>Bedrooms: {listing.bedroom}</p>
            <p className="list-btn" onClick={this.saveListing}>Save</p>)
          </div>
        </li>
    );
  }
});

module.exports = IndexItem;
