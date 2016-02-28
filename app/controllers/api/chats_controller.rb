class Api::ChatsController < ApplicationController
  def index
    @chats = current_user.chats
    render :index
  end
end
