class IdeasController < ApplicationController

def new
	@idea = Idea.new
end

def create
	@user = User.find(params[:id])
	@idea = User.ideas.new(params[:idea])

	if @idea.save
		redirect_to @user
	else
		render action: 'new'
	end
end


end
