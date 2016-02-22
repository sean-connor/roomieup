# Phase 3: SavedListings (2 days)

## Rails
### Models

### Controllers
* Api::SavedListingsController (create, destroy, index, show, update)

### Views
* savedlistings/index.json.jbuilder
* savedlistings/show.json.jbuilder

## Flux
### Views (React Components)
* SavedListingsIndex
  - SavedListingIndexItem

### Stores
* SavedListing

### Actions
* ApiActions.receiveAllSavedListings -> triggered by ApiUtil
* ApiActions.receiveSingleSavedListing
* ApiActions.deleteSavedListing
* SavedListingActions.fetchAllSavedListings -> triggers ApiUtil
* SavedListingActions.fetchSingleSavedListing
* SavedListingActions.createSavedListing
* SavedListingActions.editSavedListing
* SavedListingActions.destroySavedListing

### ApiUtil
* ApiUtil.fetchAllSavedListings
* ApiUtil.fetchSingleSavedListing
* ApiUtil.createSavedListing
* ApiUtil.editSavedListing
* ApiUtil.destroySavedListing

## Gems/Libraries
