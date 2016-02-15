class WelcomeController < ApplicationController
  def create
    email = Email.new(email);
    redirect_to root;
  end
end
