class StaticPagesController < ApplicationController

def home
	@user = User.all
end

def wiki
end

def philosophy
end

def cultureShift
end



end
