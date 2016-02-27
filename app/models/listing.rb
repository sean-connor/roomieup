# == Schema Information
#
# Table name: listings
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  bedroom     :integer          not null
#  price       :integer          not null
#  url         :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  lat         :float            not null
#  lng         :float            not null
#

class Listing < ActiveRecord::Base
  validates :title, :bedroom, :price, :url, :description, :lat, :lng, presence: true

  has_many :listingimages
  has_many :savedlistings
  has_many :users, through: :savedlistings

  def generate_chat
    if self.users.length != 0 && self.users.length % self.bedroom == 0
      self.users[-self.bedroom..-1]
    else
      return []
    end
  end

  def self.in_bounds(bounds)
     self.where("lat < ?", bounds[:northEast][:lat])
         .where("lat > ?", bounds[:southWest][:lat])
         .where("lng > ?", bounds[:southWest][:lng])
         .where("lng < ?", bounds[:northEast][:lng])
   end

end
