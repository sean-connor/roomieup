class Api::SavedlistingsController < ApplicationController

  def create
    @savedlisting = Savedlisting.new(listing_id: params[:listing_id], user_id: current_user.id)
    @savedlisting.save
    respond_to do |format|
      format.json {head :ok}
    end
  end
  def index
    @listings = current_user.listings
    render :index
  end
  def destroy
    @savedlisting = Savedlisting.where("savedlistings.user_id = ? AND savedlistings.listing_id = ?", current_user.id, params[:listing_id])
    @savedlisting[0].destroy
    render :json => { :success => "success", :status_code => "200" }
  end
end
