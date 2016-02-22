# Phase 4: Chat (2 days)

## Rails
### Models

### Controllers
* Api::ChatsController (create, destroy, index, show, update)

### Views
* chat/index.json.jbuilder
* chat/show.json.jbuilder

## Flux
### Views (React Components)
* ChatsIndex
  - ChatIndexItem

### Stores
* Chat

### Actions
* ApiActions.receiveAllChats -> triggered by ApiUtil
* ApiActions.receiveSingleChat
* ApiActions.deleteChat
* ChatActions.fetchAllChats -> triggers ApiUtil
* ChatActions.fetchSingleChat
* ChatActions.createChat
* ChatActions.editChat
* ChatActions.destroyChat

### ApiUtil
* ApiUtil.fetchAllChats
* ApiUtil.fetchSingleChat
* ApiUtil.createChat
* ApiUtil.editChat
* ApiUtil.destroyChat

## Gems/Libraries
