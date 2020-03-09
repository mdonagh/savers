class CatagoriesController < ApplicationController
  before_action :set_catagory, only: [:show, :update, :destroy]

  # GET /catagories
  def index
    @catagories = Catagory.all

    render json: @catagories
  end

  # GET /catagories/1
  def show
    render json: @catagory
  end

  # POST /catagories
  def create
    @catagory = Catagory.new(catagory_params)

    if @catagory.save
      render json: @catagory, status: :created, location: @catagory
    else
      render json: @catagory.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /catagories/1
  def update
    if @catagory.update(catagory_params)
      render json: @catagory
    else
      render json: @catagory.errors, status: :unprocessable_entity
    end
  end

  # DELETE /catagories/1
  def destroy
    @catagory.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_catagory
      @catagory = Catagory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def catagory_params
      params.fetch(:catagory, {})
    end
end
