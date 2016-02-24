# == Schema Information
#
# Table name: listingimages
#
#  id         :integer          not null, primary key
#  url        :string           not null
#  listing_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Listingimage < ActiveRecord::Base
  validates :url, :listing_id, presence: true

  belongs_to :listing
end
