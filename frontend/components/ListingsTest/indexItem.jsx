var React = require('react');
var ReactRouter = require('react-router');
var ApiUtil = require('../../util/apiUtil.js');
var ListingIndexItemImage = require('../Listings/listingIndexItemImage');
var Listing = require('../ListingsTest/listing');
var Modal = require('react-bootstrap').Modal;

var IndexItem = React.createClass({
  mixins: [ReactRouter.history],

  getInitialState: function() {
    return { showModal: false };
  },

  close: function() {
    console.log("Close Modal");
    this.setState({ showModal: false });
  },

  open: function() {
    console.log("Open Modal");
    this.setState({ showModal: true });
  },

  saveListing: function(event){
    event.preventDefault();
    ApiUtil.saveListing(this.props.listing);
  },

  confirmAlert: function(){
    confirm("Your listing will open in a new window.");
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
               <button className="modalclose" onClick={this.close}>X</button>
             </Modal.Footer>
            </Modal>
            <p className="price">${listing.price}</p>
            <p className="bedroom">Bedrooms: {listing.bedroom}</p>
            <p className="list-btn" onClick={this.saveListing}>Save</p>
          </div>
        </li>
    );
  }
});


module.exports = IndexItem;
