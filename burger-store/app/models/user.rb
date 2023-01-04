class User < ApplicationRecord
    has_secure_password
    validates :username, {uniqueness: true, presence: true}
    has_many :locations
    has_many :inventories, through: :locations
    has_many :ingredients, through: :inventories
end
