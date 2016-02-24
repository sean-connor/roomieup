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

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
