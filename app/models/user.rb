class User < ActiveRecord::Base
 	attr_accessible :email, :userName, :password, :password_confirmation
 	validates :email, :presence=>true
 	validates :userName, :presence=>true
 	validates :password, :presence=>true

has_many :ideas, :order=> 'id DESC'



end
