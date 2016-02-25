var ApiActions = require('../actions/apiActions')

module.exports = {
  //LISTINGS GROUP
  //Fetches Listings prompted by the search listings form
  fetchListings: function(listingFormState){
      $.ajax({
      url: "api/listings",
      data: listingFormState,
      success: function(matchedListings){
          ApiActions.receiveListings(matchedListings);
      }
    })
  },
  fetchSavedListings: function(){
    $.ajax({
      url: "api/savedlistings",
      success: function(savedListings){
          ApiActions.receiveSavedListings(savedListings);
      }
    })
  },
  saveListing: function(listing){
      $.post({
      url: "api/savedlistings",
      data: {listing_id: listing.id},
      success: function(){
          ApiActions.receiveSavedListing(listing);
      }
    })
  },
  destroyUserListing: function(listing){
      listingId = listing.id;
      $.ajax({
      url: "api/savedlistings/delete",
      type: 'DELETE',
      data: {listing_id: listingId},
      success: function(){
        ApiActions.notifyDeletion(listingId);
      },
      error: function(){
        console.log('Unsuccessful Delete');
      }
    })
  },
  //USERS GROUP
  fetchProfile: function(user){
    $.ajax({
      url: "api/users",
      data: {user: user},
      success: function(profile){
          ApiActions.receiveProfile(profile);
      }
    })
  },
  commitProfileChanges: function(profileState){
    $.ajax({
      type: "PATCH",
      url: "api/users/" +profileState.id,
      data: profileState,
    })
  }
}
