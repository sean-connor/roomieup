# Schema Information

## chat
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
listing_id  | string    | not null

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
chat_id     | integer   | not null, foreign key (references chats), indexed
message     | string    | not null


## saved_listings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
listing_url | string    | not null


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
