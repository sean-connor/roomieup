class Api::ClrequestController < ApplicationController
  require 'nokogiri'
  require 'open-uri'
  def index
    requestString = params[:requestString]
    @nokoResponse = Nokogiri::HTML(open(requestString)).css("div[class=content]")[0].children
    render :index
  end
end
