class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize
    skip_before_action :authorize

    private

    def authorize
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
