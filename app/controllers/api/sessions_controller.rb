class Api::SessionsController < ApplicationController

  def create
    if (params[:token])
      user = User.find_by_session_token(params[:token])
      unless user.nil?
        render :json => { :id => user.id, :username => user.username, :profile_picture => user.profile_picture, :description => user.description, :token => user.session_token}
      end
    else
      user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
      )
      unless user.nil?
        sign_in!(user)
        render :json => { :id => user.id, :username => user.username, :profile_picture => user.profile_picture, :description => user.description, :token => user.session_token}
      end
    end
  end

  def destroy
    sign_out
    render :json => { :success => "success", :status_code => "200" }
  end
end
