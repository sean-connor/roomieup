json.extract! listing, :id, :title, :url, :price, :bedroom, :description, :lat, :lng
json.imagelistings do
  json.partial! 'api/imagelistings/listingimage', collection: listing.listingimages, as: :listingimage
end
