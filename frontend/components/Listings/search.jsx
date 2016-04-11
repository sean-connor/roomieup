
var React = require('react');
var ListingStore = require('../../stores/listings');
var SavedListingStore = require('../../stores/savedlistings');
var FilterParamsStore = require('../../stores/filter_params');
var ApiUtil = require('../../util/apiUtil');
var Filters = require('./filters');
var Index = require('./index');
var Map = require('./map');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Listing = require('./listing');

function _getAllListings() {
  return ListingStore.all();
}
function _getSavedListings() {
  return SavedListingStore.all();
}

function _getFilterParams() {
  return FilterParamsStore.params();
}
var Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  _listingsChanged: function(){
    this.setState({listings: _getAllListings()});
  },
  _savedListingsChanged: function(){
    this.setState({savedlistings: _getSavedListings()});
  },
  _filtersChanged: function () {
    var newParams = _getFilterParams();
    this.setState({ filterParams: newParams });
    ApiUtil.fetchListings();
  },
  getInitialState: function(){
    return {
      listings: _getAllListings(),
      savedlistings: _getSavedListings(),
      filterParams: _getFilterParams(),
      clickedLoc: null,
      showModal: false,
      center: {lat: 37.7758, lng: -122.435},
      activeListing: null
    };
  },
  componentDidMount: function(){
    this.listingListener = ListingStore.addListener(this._listingsChanged);
    this.savedListingListener = SavedListingStore.addListener(this._savedListingsChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    ApiUtil.fetchSavedListings();
    ApiUtil.fetchListings();

  },
  componentWillUnmount: function(){
    this.listingListener.remove();
    this.savedListingListener.remove();
    this.filterListener.remove();
  },


  onCityUpdate: function(city){
    if(city.currentTarget.selectedOptions[0].value === "sfbay"){
      this.setState({center: {lat: 37.7758, lng: -122.435}});
    }else if(city.currentTarget.selectedOptions[0].value === "nyc"){
      this.setState({center: {lat: 40.75149, lng: -73.98413}});
    } else if(city.currentTarget.selectedOptions[0].value === "chi"){
      this.setState({center: {lat: 41.888429, lng: -87.624601}});
    } else {
      this.setState({center: {lat: 37.7758, lng: -122.435}});
    }
  },
  onHoverActive: function(listing){
    this.setState({activeListing: listing});
  },
  render: function(){
    return(
      <div>
        <Map
          center={this.state.center}
          activeListing={this.state.listing}
          onMarkerClick={this.handleMarkerClick}
          listings={this.state.listings}
          savedlistings={this.state.savedlistings}/>
        <div className="half">
          <Filters listings={this.state.listings} filterParams={this.state.filterParams} onCityUpdate={this.onCityUpdate}/>
          <Index listings={this.state.listings} history={this.props.history} onHoverActive={this.onHoverActive} savedlistings={this.state.savedlistings}/>
        </div>
      </div>
    );
  }
});

module.exports = Search
