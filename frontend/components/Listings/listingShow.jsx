var React = require('react');
var ListingStore = require('../../stores/listings');
var ReactRouter = require('react-router');
var Listing = require('./listing');
var Map = require('./map');
var ApiUtil = require('../../util/apiUtil');

var ListingShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    var listingId = this.props.params.listingId;
    var listing = this._findListingById(listingId) || {} ;
    return { listing: listing };
  },
  _findListingById: function (id) {
    var res;
     ListingStore.all().forEach(function (listing) {
      if (id == listing.id) {
        res = listing;
      }
    }.bind(this));
     return res;
  },
  componentDidMount: function () {
    this.listingListener = ListingStore.addListener(this._listingChanged);
    ApiUtil.fetchListings();
  },
  componentWillUnmount: function () {
    this.listingListener.remove();
  },
  _listingChanged: function () {
    var listingId = this.props.params.listingId;
    var listing = this._findListingById(listingId);
    this.setState({ listing: listing });
  },
  render: function () {
    var listings = [];
    if (this.state.listing) {
      listings.push(this.state.listing);
    }
    var Link = ReactRouter.Link;

    return (
        <div>
          <Link to="/" >Back to Listings</Link>
          <Map className="half"
            singleListing={true}
            listings={listings}
            onMarkerClick={this.handleMarkerClick} />
          <Listing listing={this.state.listing} className="half" />
          </div>
      );
  }
});

module.exports = ListingShow;
