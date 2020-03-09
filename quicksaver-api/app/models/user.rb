require 'bcrypt'

class User < ApplicationRecord
  has_secure_password
  has_many :user_last_catagories
  has_many :user_discounts

  validates :email, :presence => true, :uniqueness => true
end
