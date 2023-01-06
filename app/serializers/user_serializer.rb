class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :is_manager
end
