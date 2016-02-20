class WelcomeController < ApplicationController
  before_action :require_signed_in!
  def create
    email = Email.new(email);
    redirect_to root;
  end
end
