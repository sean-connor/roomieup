json.extract! listing, :id, :title, :url, :price, :bedroom, :description
json.imagelistings do
  json.partial! 'api/imagelistings/listingimage', collection: listing.listingimages, as: :listingimage
end
