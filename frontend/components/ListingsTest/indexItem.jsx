var React = require('react');
var ReactRouter = require('react-router');
var ApiUtil = require('../../util/apiUtil.js');
var ListingIndexItemImage = require('../Listings/listingIndexItemImage');
var Listing = require('../ListingsTest/listing');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;



var IndexItem = React.createClass({
  mixins: [ReactRouter.history],

  getInitialState: function() {
    return { showModal: false,
             saved: this.props.saved}
  },

  close: function() {
    this.setState({ showModal: false });
  },

  open: function() {
    this.setState({ showModal: true});
  },

  confirmAlert: function(){
    confirm("Your listing will open in a new window.");
  },

  editListing: function(event){
    event.preventDefault();
    if(event.target.innerHTML === "Save"){
      ApiUtil.saveListing(this.props.listing);
      this.setState({saved: "Saved"})
    } else {
      ApiUtil.destroyUserListing(this.props.listing);
      this.setState({saved: "Save"})
    }
  },

  render: function(){
    var listing = this.props.listing;
    return (
        <li className="listing-index-item">
          <div className="listContainer">
            <ListingIndexItemImage key={listing.id} images={listing.imagelistings}/>
            <a className="title" onClick={this.open}>{listing.title}!&nbsp;(Click for Detail)</a>
            <Modal className="modal" show={this.state.showModal} onHide={this.close}>
               <Modal.Header>
                 <Modal.Title>{listing.title}</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                 <Listing listing={listing}/>
               </Modal.Body>
               <Modal.Footer>
                 <Button className="modalclose" onClick={this.close}>Close</Button>
               </Modal.Footer>
            </Modal>
            <p className="price">${listing.price}</p>
            <p className="bedroom">Bedrooms: {listing.bedroom}</p>
            <p className="list-btn" onClick={this.editListing}>{this.state.saved}</p>
          </div>
        </li>
    );
  }
});


module.exports = IndexItem;
