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
#

class Listing < ActiveRecord::Base
  validates :title, :bedroom, :price, :url, :description, presence: true

  has_many :listingimages
  has_many :savedlistings
  has_many :users, through: :savedlistings

end
