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

require 'test_helper'

class ListingimageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
