var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var SavedListingStore = require('../stores/savedlistings');
var ListingIndexItem = require('./listingIndexItem');

function _getAllListings(){
  return SavedListingStore.all();
}

module.exports = React.createClass({

getInitialState: function(){
  return {listings: "Loading"};
},

renderListings: function(){
  if (this.state.listings === 'Loading'){
    return (<h3 className="loading">Some LoadingImage</h3>);
  } else {
    return (
      <ul className="listingcollection">
          {this.state.listings.map(function(listing){
            return <ListingIndexItem key={listing.id} action={"Delete"} listing={listing} />;
          })}
      </ul>
    );
  }
},

_listingsChanged: function(){
  console.log('updating listings - listingsChanged');
  this.setState({listings: _getAllListings()});
},

componentDidMount: function(){
  this.listingListener = SavedListingStore.addListener(this._listingsChanged);
  ApiUtil.fetchSavedListings();
},

componentWillUnmount: function(){
  this.listingListener.remove();
},

render: function(){
  return(
    <div className="savedIndex">
      {this.renderListings()}
    </div>
  )
}

})
