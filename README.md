# roomieup

[Heroku Link](http://roomieup.com "roomieup")

## Minimum Viable Product

rooomieup is a web application designed to search for living spaces and match
with roommates built using Ruby on Rails and React.js. roomieup allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [X] Create an account
- [X] Log in / Log out
- [X] View aggregated apartment listings
- [X] Save, edit, and delete apartment listings
- [ ] View, enter, and utilize chatrooms

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (1 days)

**Objective:** Functioning rails project with Authentication

- [X] create new project
- [X] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [X] blank landing page after signin

### Phase 2: Craigslist Aggregation, API, and basic APIUtil (2 days)

**Objective:** CL can be queried and parsed to JSON through the API.

- [X] generate CL Query String
- [X] scrape CL with Watir, PhantomJS and Nokogiri
- [X] parse CL Response
- [X] jBuilder views for listing search
- [X] setup `APIUtil` to interact with the API
- [X] test out API interaction in the console.
- [X] setup Webpack & Flux scaffold
- [X] style and position new elements

### Phase 3: Flux Architecture and Router (1 days)

**Objective:** Listings can be searched and saved with the
user interface.

- [X] setup the flux loop with skeleton files
- [X] setup React Router
- implement each listing component, building out the flux loop as needed.
  - [X] `SearchListingsIndex`
  - [X] `SearchListingIndexItem`
  - [X] `SearchListingForm`
- [X] save selected listings url to the DB
- [X] style and position new elements


### Phase 6: Saved Listings (1 day)

**Objective:** Saved Listings, a user can view a display of saved listings through UI.

- [X] create `Listing` model
- build out API, Flux loop, and components for:
  - [X] Listing Create, Destroy
  - [X] adding listing from a `SearchListingsItem`
- [X] position and style new elements

### Phase 7: Home Screen (0.5 days)

**objective:** Enable home screen display.

- [ ] add additional user properties to user model
- build out API, Flux loop, and components for:
- [ ] fetching notifications for users
- [ ] linking to notification actions
- [ ] position and style new elements

### Phase 7: Chats (1.5 days)

**Objective:** Chats will be generated for matched users.

- [ ] create `Chat`and `Message` models and join table
- build out API, Flux loop, and components for:
  - [ ] fetching chats for users
  - [ ] adding users to chats
  - [ ] adding new messages to chats
  - [ ] creating chats when listing is matched
- [ ] position and style new elements

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more clear, concise and cogent.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Phase 9: Walkthrough (1 day)

**objective:** Make a tool tip walkthrough for site features.

- [ ] Seed and create demo user
- [ ] Automate walk through each user page
- [ ] Utilize Shepherd and Tether

### Bonus Features (TBD)
- [ ] Listing account for posting apartment ads that originate locally
- [ ] Notifications for users on new chats and listing updates

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
