class Idea < ActiveRecord::Base
   attr_accessible :subject, :body, :posted_at

   belongs_to :user

   validates :body, :presence=>true

   

   

end
