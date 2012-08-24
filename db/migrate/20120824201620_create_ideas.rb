class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
    	t.string :subject
    	t.text :body
    	t.datetime :posted_at

      t.timestamps
    end
  end
end
