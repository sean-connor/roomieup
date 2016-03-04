var React = require('react');
var ReactRouter = require('react-router');
var ListingIndexItemImage = require('../Listings/listingIndexItemImage');

var Listing = React.createClass({

  render: function () {
    var Link = ReactRouter.Link;
    var listing = this.props.listing;
    var description = listing.description;
    return (
      <div className="modalContainer">
        <div className="modalImages">
          <ListingIndexItemImage key={listing.id} images={listing.imagelistings}/>
        </div>
        <p>Price: <strong>{listing.price}</strong></p>
        <p>Bedrooms: <strong>{listing.bedroom}</strong></p>
        <p>Description:</p>
        <span dangerouslySetInnerHTML={{__html: description}}/>
        <a className="rentlink" href={listing.url} target="_blank" onClick={this.confirmAlert}>Rent me!</a>
      </div>
    );
  }
});

module.exports = Listing;
