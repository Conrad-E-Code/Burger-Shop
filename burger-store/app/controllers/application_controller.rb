class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize


private

def authorize
  manager = session[:is_manager]
  return render json: { error: 'hello from authorize'}, status: :unauthorized unless manager
end

end