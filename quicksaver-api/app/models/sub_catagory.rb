class SubCatagory < ApplicationRecord
  has_many :last_catagories
  belongs_to :catagory

end
