var React = require('react');
var ListingIndexItemImage = require('./listingIndexItemImage');
var History = require('react-router').History;
var ApiUtil = require('../../util/apiUtil.js');
var UserStore = require('../../stores/user');
var Modal = require('react-bootstrap').Modal;
var Listing = require('../ListingsTest/listing');
var Button = require('react-bootstrap').Button;
module.exports = React.createClass({
  //mixins: [History],

  showDetail: function () {
    //this.history.pushState(null, '/listing/' + this.props.listing.id, {});
  },
  getInitialState: function() {
    return { showModal: false}
  },
  editListing: function(event){
    event.preventDefault();
    ApiUtil.destroyUserListing(this.props.listing);
  },
  close: function() {
    this.setState({ showModal: false });
  },

  open: function(event) {
    if(event.target.classList[0] == "title" || event.target.classList[0] == "sliderimage"){
      this.setState({ showModal: true});
    }
  },
  renderEditButton: function(){
    if(UserStore.signedIn()){
      return(<p className="list-btn" id="true" onClick={this.editListing}>&#9829;</p>)
    }
  },

  render: function () {
    return(
      <li onClick={this.open} className="saved-listing-index-item">
        <div className="listContainer">
          <ListingIndexItemImage key={this.props.listing.id} images={this.props.listing.imagelistings}/>
          <Modal className="modal" show={this.state.showModal} onHide={this.close}>
             <Modal.Header>
               <Modal.Title>{this.props.listing.title}</Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <Button className="modalclose" onClick={this.close}>&#x2716;</Button>
               <Listing listing={this.props.listing}/>
             </Modal.Body>
          </Modal>
          <p className="price">${this.props.listing.price}</p>
          <p className="bedroom">Bedrooms: {this.props.listing.bedroom}</p>
          {this.renderEditButton()}
        </div>
      </li>
    );
  }

})
