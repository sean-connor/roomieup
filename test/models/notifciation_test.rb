# == Schema Information
#
# Table name: notifciations
#
#  id                :integer          not null, primary key
#  user_id           :integer          not null
#  notification      :string           not null
#  notification_type :string           not null
#  notification_id   :string           not null
#  read              :boolean          default(FALSE)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class NotifciationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
