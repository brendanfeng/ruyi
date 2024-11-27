class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user if user && user.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    session_token
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  has_many :created_projects,
           primary_key: :id,
           foreign_key: :creator_id,
           class_name: 'Project',
           dependent: :destroy

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
