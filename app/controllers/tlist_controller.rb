class TlistController < ApplicationController
	def ind

	end

	def index
    	render :json => Todo.all
  	end
end
