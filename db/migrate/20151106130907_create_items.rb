class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.decimal :cost
      t.string :image
      t.string :category

      t.timestamps null: false
    end
  end
end
