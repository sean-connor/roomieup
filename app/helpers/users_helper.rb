# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  session_token   :string
#  is_new          :boolean          default(TRUE)
#  description     :text             default("Enter a profile description!")
#  profile_picture :string           default("http://res.cloudinary.com/roomieup-com/image/upload/v1456353088/moymcoe5khih7l1wsztr.jpg")
#

module UsersHelper
end
