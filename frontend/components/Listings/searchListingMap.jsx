var React = require('react');

var Map = React.createClass({
  render: function(){
    return (
      <div className="map" ref="map">

      </div>
    )
  },
  componentDidMount: function(){
  var mapDOMNode = this.refs.map;
  var mapOptions = {
    center: {lat: 37.8, lng: -122.435},
    zoom: 12
  };
  this.map = new google.maps.Map(mapDOMNode, mapOptions);
}
})
module.exports = Map;
