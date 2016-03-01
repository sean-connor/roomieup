class Api::ListingsController < ApplicationController
  def index
    listings = Listing.in_bounds(params[:bounds])
    if(params[:bedrooms])
      listings = listings.where("listings.bedroom = ?", params[:bedrooms])
    end

    if(params[:minPrice] && params[:maxPrice])
      listings = listings.where(price: price_range)
    end
    @listings = listings.includes(:listingimages)
    render :index
  end


  private
  def price_range
    (params[:minPrice]..params[:maxPrice])
  end
end
