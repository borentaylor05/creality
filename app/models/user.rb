class User < ActiveRecord::Base
 	attr_accessible :email, :userName, :password
 	validates :email, :presence=>true
 	validates :userName, :presence=>true
 	validates :password, :presence=>true
end
