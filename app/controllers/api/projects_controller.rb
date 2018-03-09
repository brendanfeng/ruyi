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

  def fetch_by_category
    @projects = Project.where(category: params[:category]).order(created_at: :asc).limit(5)
    render :search
  end

  private

  def project_params
    params.require(:project).permit(
      :title, :img_url, :blurb, :story, :category, :goal, :pledge_amount, :public, :creator_id
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