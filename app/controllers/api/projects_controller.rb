class Api::ProjectsController < ApplicationController
  before_action :ensure_logged_in, only:[:create, :update, :destroy]
  before_action :validate_credentials, only:[:update, :destroy]

  def index
    @projects = Project.all
    render :index
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def create
    @project = Project.new(project_params)
    @project.creator_id = current_user.id
    if @project.save
      render :show
    else
      render json: @project.errors.as_json(full_messages: true), status: 422
    end
  end

  def update
    unless already_rendered
      @project = Project.find(params[:id])
      if @project.update(project_params)
        render :show
      else
        render json: @project.errors.as_json(full_messages: true), status: 422
      end
    end
  end

  def destroy
    unless already_rendered
      @project = Project.find(params[:id])
      @project.destroy
      render :show
    end
  end

  def fetch_index
    @projects = Project.where(category: params[:category]).order(created_at: :asc).limit(4)
    creators = @projects.pluck(:creator_id)
    @users = User.where('id IN (?)', creators)
    render :index
  end

  def fetch_header
    @public_count = Project.where("public = true").count
    @users_count = User.count
    @funded_count = Project.where("pledged_amount >= goal").count
    render :header
  end

  def search_projects
    cat, q = params[:category], params[:query]
    if cat == "all" && q == ""
      @projects = Project.all
    elsif cat == "all"
      @projects = Project.search_projects(q)
      .where(public: true)
    elsif q == ""
      @projects = Project.where(category: cat)
      .where(public: true)
    else
      @projects = Project.search_projects(q)
      .where(public: true)
      .where(category: cat)
    end
    creators = @projects.pluck(:creator_id)
    @users = User.where('id IN (?)', creators)
    render :index
  end

  def limited_search_projects
    @projects = Project.search_projects(params[:query]).where(public: true).limit(4)
    render :index
  end

  private

  def project_params
    params.require(:project).permit(
      :title, :img_url, :blurb, :story, :category, :goal, :pledged_amount, :public, :creator_id
    )
  end

  def validate_credentials
    @project = Project.find(params[:id])
    unless @project.creator_id == current_user.id
      render json: ["Unauthorized request"], status: 401
      @already_rendered = true
    end
  end
end
