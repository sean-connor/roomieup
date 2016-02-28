class Api::MessagesController < ApplicationController
  def index
    @messages = Chat.find(params[:chat_id]).messages
    render :index
  end
  def create
    @message = Message.new(body: params[:body], chat_id: params[:chat_id], user_id: current_user.id)
    if @message.save
        #Get sibling messages
      listing_title = @message.chat.listing.title
      chat_messages = @message.chat.user_chats.each do |user_chat|
        user.id = user_chat.user_id
        notification = Notification.new(user_id: user.id, notification: "#{current_user.username} sent a message for #{listing_title}", notification_type: "message", notification_id: @message.id)
        notification.save
      end
      render :create
    end
  end
end
