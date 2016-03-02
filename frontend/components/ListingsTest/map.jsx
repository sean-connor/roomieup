var React = require('react');
var ReactDOM = require('react-dom');
var FilterActions = require('../../actions/filter_actions');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var CENTER = {lat: 37.7758, lng: -122.435};

var Map = React.createClass({
  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: this.centerListingCoords(),
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
    this.markers = [];
    this.props.listings.forEach(this.createMarkerFromListing);
  },
  centerListingCoords: function () {
    if (this.props.listings[0] && this.props.listings[0].lng) {
      var listing = this.props.listings[0];
      return { lat: listing.lat, lng: listing.lng };
    } else {
      return CENTER;
    }
  },
  componentDidUpdate: function (oldProps) {
    this._onChange();
  },
  _onChange: function(){
    var listings = this.props.listings;
    var toAdd = [], toRemove = this.markers.slice(0);
    listings.forEach(function(listing, idx){
      var idx = -1;
      //check if listing is already on map as a marker
      for(var i = 0; i < toRemove.length; i++){
        if(toRemove[i].listingId == listing.id){
          idx = i;
          break;
        }
      }
      if(idx === -1){
        //if it's not already on the map, we need to add a marker
        toAdd.push(listing);
      } else {
        //if it IS already on the map AND in the store, we don't need
        //to remove it
        toRemove.splice(idx, 1);
      }
    });
    toAdd.forEach(this.createMarkerFromListing);
    toRemove.forEach(this.removeMarker);

    if (this.props.singleListing) {
      this.map.setOptions({draggable: false});
      this.map.setCenter(this.centerListingCoords());
    }
  },
  componentWillUnmount: function(){
  },
  registerListeners: function(){
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = that.map.getBounds();
      var northEast = _getCoordsObj(bounds.getNorthEast());
      var southWest = _getCoordsObj(bounds.getSouthWest());
      //actually issue the request
      var bounds = {
        northEast: northEast,
        southWest: southWest
      };
      FilterActions.updateBounds(bounds);
    });
    google.maps.event.addListener(this.map, 'click', function(event) {
      var coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      that.props.onMapClick(coords);
    });
  },
  createMarkerFromListing: function (listing) {
    var that = this;
    var pos = new google.maps.LatLng(listing.lat, listing.lng);
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      listingId: listing.id
    });
    marker.addListener('click', function () {
      that.props.onMarkerClick(listing)
    });
    this.markers.push(marker);
  },
  removeMarker: function(marker){
    for(var i = 0; i < this.markers.length; i++){
      if (this.markers[i].listingId === marker.listingId){
        this.markers[i].setMap(null);
        this.markers.splice(i, 1);
        break;
      }
    }
  },
  render: function(){
    return ( <div className="map" ref="map">Map</div>);
  }
});

module.exports = Map;
