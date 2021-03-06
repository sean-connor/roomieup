class Api::SavedlistingsController < ApplicationController

  def create
    @savedlisting = Savedlisting.new(listing_id: params[:listing_id], user_id: current_user.id)
    @savedlisting.save
    @listing = Listing.find(params[:listing_id])
    followedusers = @listing.generate_chat
    if followedusers.length > 1
      chat = Chat.new(title: @listing.title, listing_id: @listing.id)
      if chat.save
        followedusers.each do |user|
            userchat = UserChat.new(user_id: user.id, chat_id: chat.id)
            if userchat.save
              Notification.create!(user_id: user.id, notification: "You were added to a chat for #{@listing.title}", notification_type: "listing", notification_id: @listing.id)
            end
          end
      end
    end
    render :json => {:success => "success", :status_code => "200"}
  end

  def index
    @listings = current_user.listings
    render :index
  end

  def destroy
    @savedlisting = Savedlisting.where("savedlistings.user_id = ? AND savedlistings.listing_id = ?", current_user.id, params[:listing_id])
    unless @savedlisting[0].user.chats.where("chats.listing_id = ?", params[:listing_id]).empty?
      @savedlisting[0].user.chats.where("chats.listing_id = ?", params[:listing_id])[0].destroy
    end
    @savedlisting[0].destroy
    render :json => { :success => "success", :status_code => "200" }
  end
end
