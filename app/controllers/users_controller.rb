class UsersController < ApplicationController

def index
	@user = User.all
	
end
def show
	@user = User.find(params[:id])
end

def new
    @user = User.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @user }
    end
  end
 def create
 	@user = User.new(params[:user])
 	if @user.save
 			redirect_to @user, notice: "User Successfully Created"
 	else
 		render action: 'new'
 	end
 end

end
