class CreateSubCatagories < ActiveRecord::Migration[5.2]
  def change
    create_table :sub_catagories do |t|
      t.string :name, null: false

      t.timestamps
      t.references :catagory
    end
  end
end
