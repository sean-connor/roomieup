# Flux Stores

### SavedListingStore

Holds all persisted listing data.

##### Actions:
- `receiveAllSavedListings`
- `receiveSingleSavedListing`
- `removeSavedListing`

##### Listeners:
- `SearchListingIndexItem` (passes to `SearchListingIndexItem` via props)
- `SavedListingIndexItem`


### ChatStore

Holds all persisted chat data.

##### Actions:
- `receiveAllChats`
- `receiveChat`
- `removeChat`

##### Listeners:
- `ChatIndex`

### MessageStore

Holds all persisted message data.

##### Actions:
- `receiveAllMessages`
- `receiveMessage`

##### Listeners:
- `MessageForm`
- `ChatIndexItem`
