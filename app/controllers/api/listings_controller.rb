class Api::ListingsController < ApplicationController
  def index
    p params
    listings = Listing.in_bounds(params[:bounds])
    p listings
    if(params[:bedroom])
      listings = listings.where("listings.bedroom = ?", params[:bedroom])
    end

    if(params[:minprice] && params[:maxprice])
      listings = listings.where(price: price_range)
    end
    @listings = listings.includes(:listingimages)
    render :index
  end


  private
  def price_range
    (params[:minprice]..params[:maxprice])
  end
end
