
var React = require('react');
var ListingStore = require('../../stores/listings');
var FilterParamsStore = require('../../stores/filter_params');
var ApiUtil = require('../../util/apiUtil');
var Filters = require('./filters');
var Index = require('./index');
var Map = require('./map');

function _getAllListings() {
  return ListingStore.all();
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
  _filtersChanged: function () {
    var newParams = _getFilterParams();
    this.setState({ filterParams: newParams });
    ApiUtil.fetchListings();
  },
  getInitialState: function(){
    return {
      listings: _getAllListings(),
      filterParams: _getFilterParams(),
      clickedLoc: null,
    };
  },
  componentDidMount: function(){
    this.listingListener = ListingStore.addListener(this._listingsChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    ApiUtil.fetchListings();
  },
  componentWillUnmount: function(){
    this.listingListener.remove();
    this.filterListener.remove();
  },

  handleMarkerClick: function (listing) {
    this.props.history.pushState(null, "listings/" + listing.id);
  },
  render: function(){
    return(
      <div>
        <Map
          onMarkerClick={this.handleMarkerClick}
          listings={this.state.listings}/>
        <div className="half">
          <Filters listings={this.state.listings} filterParams={this.state.filterParams}/>
          <Index listings={this.state.listings} history={this.props.history} />
        </div>
      </div>
    );
  }
});

module.exports = Search
