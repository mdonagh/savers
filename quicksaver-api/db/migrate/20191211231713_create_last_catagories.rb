class CreateLastCatagories < ActiveRecord::Migration[5.2]
  def change
    create_table :last_catagories do |t|
      t.string :name, null: false

      t.timestamps
      t.references :sub_catagory
    end
  end
end
