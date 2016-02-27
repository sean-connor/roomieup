# == Schema Information
#
# Table name: notifications
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

class Notification < ActiveRecord::Base
  validates :user_id, :notification, :notification_type, :notification_id, presence: true

  belongs_to :user
end
