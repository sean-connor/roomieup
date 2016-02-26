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


  def self.in_bounds(bounds)
    p "SELF IN BOUNDS"
    p bounds['northEast']
    north = bounds['northEast']['north']
    east = bounds['northEast']['east']
    south = bounds['southWest']['south']
    west = bounds['southWest']['west']
    benches = Listing.where("lat BETWEEN #{south} AND #{north}").where("lng BETWEEN #{west} AND #{east}")
  end

end
