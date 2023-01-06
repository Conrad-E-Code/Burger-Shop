class SessionsController < ApplicationController
    # post "/login", to: "sessions#create"
    #  delete "/logout", to: "sessions#destroy"
     skip_before_action :authorize, only: :create
     skip_before_action :manager_authorize, only: [:create, :destroy]
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate params[:password]
            session[:user_id] = user.id
            session[:is_manager] = user.is_manager
            render json: user, status: 201
        else
            render json: {
                              errors: ["Invalid username or password"],
                          },
                          status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
