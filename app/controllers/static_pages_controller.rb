class StaticPagesController < ApplicationController

def home
	@user = User.all(:order=>'created_at DESC')
end

def wiki
end

def philosophy
end

def cultureShift
end



end
