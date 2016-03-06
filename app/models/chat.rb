# == Schema Information
#
# Table name: chats
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  listing_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Chat < ActiveRecord::Base
  validates :listing_id, :title, presence: true
  belongs_to :listing
  
  has_many :messages, :dependent => :destroy
  has_many :user_chats, :dependent => :destroy
end
