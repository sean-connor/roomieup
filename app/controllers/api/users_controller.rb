class Api::UsersController < ApplicationController
  def index
    @users = User.all()
    if (params[:user] == "current")
      @user = @users.where(id: current_user.id)[0]
      render :template => "api/users/_user"
    else
      render :index
    end
  end
  def update
    user = User.find(params[:id])
    user.update(profile_picture: params[:profile_picture], description: params[:description])
    render :json => { :success => "success", :status_code => "200" }
  end
end
