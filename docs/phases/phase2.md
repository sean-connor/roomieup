# Phase 2: Flux Architecture and Listing CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* SearchListingsIndex
  - SearchListingsIndexItem
* SearchListingForm
* SaveListingsIndex
  - SaveListingsIndexItem
* SaveListingForm

### Stores
* Note

### Actions
* ApiActions.receiveAllListings -> triggered by ApiUtil
* ApiActions.receiveSingleListing
* ApiActions.deleteSavedListing
* ListingActions.fetchAllListings -> triggers ApiUtil
* ListingActions.fetchSingleListing
* ListingActions.createListing
* ListingActions.editListing
* ListingActions.destroyListing

### ApiUtil
* ApiUtil.fetchAllListings
* ApiUtil.fetchSingleListing
* ApiUtil.createListing
* ApiUtil.editListing
* ApiUtil.destroyListing

## Gems/Libraries
* Flux Dispatcher (npm)
* Nokogiri
* PhantomJS
