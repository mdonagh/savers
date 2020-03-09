class LastCatagory < ApplicationRecord
    belongs_to :sub_catagory
    has_many :user_last_catagories
end
