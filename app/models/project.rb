class Project < ApplicationRecord
  CATEGORIES = ["Comics & Illustration", "Film", "Games", "Food & Craft", "Arts", "Design & Tech", "Publishing", "Music"]

  validates :img_url, :story, presence: true
  validates :blurb, presence: true, length: { maximum: 130 }
  validates :title, presence: true, uniqueness: true, length: { maximum: 60 }
  validates :goal, presence: true, numericality: { only_integer: true }
  validates :category, presence: true, inclusion: { in: CATEGORIES }
  validates :pledged_amount, numericality: { only_integer: true }
  validates :public, presence: true, inclusion: {in: [true, false]}

  after_initialize :ensure_pledged_amount, :ensure_project_status

  def self.categories
    CATEGORIES.dup
  end

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: "User"

  private

  def ensure_pledged_amount
    self.pledged_amount ||= 0
  end

  def ensure_project_status
    self.public ||= false
  end
end
