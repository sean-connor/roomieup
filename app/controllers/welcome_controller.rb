class WelcomeController < ApplicationController
  before_action :authenticate_user!
  def create
    email = Email.new(email);
    redirect_to root;
  end
end
