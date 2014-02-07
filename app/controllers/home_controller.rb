class HomeController < ApplicationController
	layout :resolve_layout
     
	def index
	end

	def history
	end

	def query
	end

	def help
	end

	def login
	end

	private   
    def resolve_layout
     case action_name
       when "login"
        "basic"
       else 
        "application"
       end
    end
end