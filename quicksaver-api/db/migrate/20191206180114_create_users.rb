class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :full_name, null: false
      t.string :email, unique: true, null: false
      t.string :img_url
      t.string :password_digest, null: false
      t.boolean :reset_password, defult: false

      t.timestamps
    end
  end
end
