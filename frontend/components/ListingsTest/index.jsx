
var React = require('react');
var IndexItem = require('./indexItem');

var Index = React.createClass({
  handleItemClick: function (listing) {
    //ADD HISTORY MIX IN
    this.props.history.pushState(null, "listings/" + listing.id );
  },
  render: function(){
    var handleItemClick = this.handleItemClick;
    return (
      <div className="index">
        <ul className="listingcollection">
          {
            this.props.listings.map(function(listing){
              var boundClick = handleItemClick.bind(null, listing);
              return <IndexItem
                onClick={boundClick}
                listing={listing}
                key={listing.id} />
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = Index;
