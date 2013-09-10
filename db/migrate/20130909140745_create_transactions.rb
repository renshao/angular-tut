class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.text :description
      t.integer :amount
      t.string :category

      t.timestamps
    end
  end
end
