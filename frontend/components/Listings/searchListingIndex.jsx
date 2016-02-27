var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var ListingStore = require('../../stores/listings');
var ListingIndexItem = require('./listingIndexItem');

function _getAllListings(){
  return ListingStore.all();
}

module.exports = React.createClass({

getInitialState: function(){
  return {listings: []};
},

renderListings: function(){
  if (this.state.listings === undefined){
    return (<h3 className="loading">Some LoadingImage</h3>);
  } else {
    return (
      <ul className="listingcollection">
          {this.state.listings.map(function(listing){
            return <ListingIndexItem key={listing.id} action={"Save"} listing={listing} />;
          })}
      </ul>
    );
  }
},

_listingsChanged: function(){
  this.setState({listings: _getAllListings()});
},

componentDidMount: function(){
  this.listingListener = ListingStore.addListener(this._listingsChanged);

  //ApiUtil.fetchListings();
},

componentWillUnmount: function(){
  this.listingListener.remove();
},

render: function(){
  return(
    <div className="index">
      {this.renderListings()}
    </div>
  )
}

})
