class UserDiscount < ApplicationRecord
  belongs_to :user
  belongs_to :discount
  has_one :like
end
