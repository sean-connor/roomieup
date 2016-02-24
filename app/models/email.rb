# == Schema Information
#
# Table name: emails
#
#  id         :integer          not null, primary key
#  address    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Email < ActiveRecord::Base
  validates :address, presence: true

end
