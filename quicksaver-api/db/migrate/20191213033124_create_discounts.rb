class CreateDiscounts < ActiveRecord::Migration[5.2]
  def change
    create_table :discounts do |t|
      t.string :name, null: false
      t.string :desc, null: false
      t.datetime :expiration, null: false
      t.string :telephone, null: false
      t.string :address
      t.string :country
      t.string :city
      t.string :state
      t.string :zip
      t.decimal :lat
      t.decimal :lng

      t.timestamps
    end
  end
end
