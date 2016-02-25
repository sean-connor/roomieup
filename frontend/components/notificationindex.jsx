var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var NotificationStore = require('../stores/listings');
var NotificationIndexItem = require('./listingIndexItem');

function _getAllNotifications(){
  return NotificationsStore.all();
}

module.exports = React.createClass({

getInitialState: function(){
  return {listings: ApiUtil.fetchNotifications()};
},

renderNotifications: function(){
  if (this.state.listings === undefined){
    return (<h3 className="loading">Some LoadingImage</h3>);
  } else {
    return (
      <ul className="listingcollection">
          {this.state.listings.map(function(listing){
            return <NotificationsIndexItem key={listing.id} action={"Save"} listing={listing} />;
          })}
      </ul>
    );
  }
},

_listingsChanged: function(){
  this.setState({listings: _getAllNotifications()});
},

componentDidMount: function(){
  this.listingListener = NotificationsStore.addListener(this._listingsChanged);
  ApiUtil.fetchNotifications();
},

componentWillUnmount: function(){
  this.listingListener.remove();
},

render: function(){
  return(
    <div className="notificationIndex">
      {this.renderNotifications()}
    </div>
  )
}

})
