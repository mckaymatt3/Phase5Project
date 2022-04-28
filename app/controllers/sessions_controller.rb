class SessionsController < ApplicationController
    # skip_before_action :authorize, only: [:create]

    def create
        # this is where you only LOGIN
        # find user by using username params
        user = User.find_by(username: params[:username])
        
        if user&.authenticate(params[:password])
            
            # save the user's ID to the session hash
            session[:user_id] = user.id

            # render the user as a json file
            render json: user, status: :created
        else
            render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
        end
    end

    def destroy
        
        # removes user id from the session hash
        session.delete :user_id
        
        # returns an empty response 
        head :no_content
    end

end
