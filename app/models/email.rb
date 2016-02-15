class Email < ActiveRecord::Base
  validates :address, presence: true

end
