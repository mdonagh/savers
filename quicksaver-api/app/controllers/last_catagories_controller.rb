class LastCatagoriesController < ApplicationController
  before_action :set_last_catagory, only: [:show, :update, :destroy]

  # GET /last_catagories
  def index
    @last_catagories = LastCatagory.all

    render json: @last_catagories
  end

  # GET /last_catagories/1
  def show
    render json: @last_catagory
  end

  # POST /last_catagories
  def create
    @last_catagory = LastCatagory.new(last_catagory_params)

    if @last_catagory.save
      render json: @last_catagory, status: :created, location: @last_catagory
    else
      render json: @last_catagory.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /last_catagories/1
  def update
    if @last_catagory.update(last_catagory_params)
      render json: @last_catagory
    else
      render json: @last_catagory.errors, status: :unprocessable_entity
    end
  end

  # DELETE /last_catagories/1
  def destroy
    @last_catagory.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_last_catagory
      @last_catagory = LastCatagory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def last_catagory_params
      params.fetch(:last_catagory, {})
    end
end
