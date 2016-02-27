# == Schema Information
#
# Table name: user_chats
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  chat_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class UserChatTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
