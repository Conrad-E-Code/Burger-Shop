class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize
    before_action :manager_authorize
    # skip_before_action :authorize

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end
    def manager_authorize
        manager = session[:is_manager]
        unless manager
            return(
                render json: {
                                  errors: ["Unauthorized hello from #authorize"],
                              },
                              status: :unauthorized
            )
        end
    end
end
