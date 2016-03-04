
var React = require('react');
var IndexItem = require('./indexItem');
var ApiUtil = require('../../util/apiUtil.js');



var Index = React.createClass({

  isSaved: function(listing){
    var saved = "Save"
    this.props.savedlistings.forEach(function(savedlisting, idx){
      if(savedlisting.id === listing.id) {
        saved = "Saved";
      }
    })
    return saved;
  },

  render: function(){
    var handleItemClick = this.handleItemClick;
    var that = this;
    return (
      <div className="index">
        <ul className="listingcollection">
          {
            this.props.listings.map(function(listing){
              return <IndexItem
                listing={listing}
                saved={that.isSaved(listing)}
                key={listing.id} />
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = Index;
