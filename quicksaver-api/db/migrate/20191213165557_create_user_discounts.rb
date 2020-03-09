class CreateUserDiscounts < ActiveRecord::Migration[5.2]
  def change
    create_table :user_discounts do |t|

      t.timestamps
      t.references :user
      t.references :discount
    end
  end
end
