var React = require('react');
var ReactRouter = require('react-router');
var ApiUtil = require('../../util/apiUtil.js');
var ListingIndexItemImage = require('./listingIndexItemImage');
var Listing = require('./listing');
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

  open: function(event) {
    if(event.target.classList[0] == "title" || event.target.classList[0] == "sliderimage"){
      this.setState({ showModal: true});
    }
  },

  confirmAlert: function(){
    confirm("Your listing will open in a new window.");
  },

  editListing: function(event){

    event.preventDefault();
    if(!(this.state.saved)){
      ApiUtil.saveListing(this.props.listing);
      this.setState({saved: true})
    } else {
      ApiUtil.destroyUserListing(this.props.listing);
      this.setState({saved: false})

    }
  },

  render: function(){
    var listing = this.props.listing;
    return (
        <li className="listing-index-item">
          <div className="listContainer" onClick={this.open}>
            <ListingIndexItemImage key={listing.id} images={listing.imagelistings}/>
            <a className="title">{listing.title}</a>
            <Modal className="modal" show={this.state.showModal} onHide={this.close}>
               <Modal.Header>
                 <Modal.Title>{listing.title}</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                 <Button className="modalclose" onClick={this.close}>&#x2716;</Button>
                 <Listing listing={listing}/>
               </Modal.Body>
            </Modal>
            <p className="price">${listing.price}</p>
            <p className="bedroom">Bedrooms: {listing.bedroom}</p>
            <p className="list-btn" id={this.state.saved} onClick={this.editListing}>&#9829;</p>
          </div>
        </li>
    );
  }
});


module.exports = IndexItem;
