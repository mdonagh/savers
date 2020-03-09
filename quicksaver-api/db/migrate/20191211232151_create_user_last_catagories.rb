class CreateUserLastCatagories < ActiveRecord::Migration[5.2]
  def change
    create_table :user_last_catagories do |t|

      t.timestamps
      t.references :user
      t.references :last_catagory
    end
  end
end
