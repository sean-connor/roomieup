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

class UserChat < ActiveRecord::Base
  validates :user_id, :chat_id, presence: true
  validates :chat_id, uniqueness: {scope: :user_id}

  belongs_to :user
  belongs_to :chat
end
