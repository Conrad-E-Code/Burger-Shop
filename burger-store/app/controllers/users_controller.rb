class UsersController < ApplicationController
  def create
    user = User.create username: params[:username], password: params[:password],
                       password_confirmation: params[:password_confirmation]
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    user = User.find_by id: session[:user_id]
    if user
      render json: user
    else
      render json: { errors: ['Unauthorized'] }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
