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

class Savedlisting < ActiveRecord::Base
  validates :listing_id, :user_id, presence: true

  belongs_to :listing
  belongs_to :user
end
