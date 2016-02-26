class Api::UsersController < ApplicationController

  def create
    user = User.new(user_params)
    if user.save
      sign_in!(user)
      render :json => {:id => user.id, :username => user.username, :profile_picture => user.profile_picture, :description => user.description, :token => user.session_token}
    end
  end

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
  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
