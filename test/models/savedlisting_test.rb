# == Schema Information
#
# Table name: savedlistings
#
#  id         :integer          not null, primary key
#  listing_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class SavedlistingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
