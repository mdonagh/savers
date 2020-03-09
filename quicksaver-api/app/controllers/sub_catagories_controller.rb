class SubCatagoriesController < ApplicationController
  before_action :set_sub_catagory, only: [:show, :update, :destroy]

  # GET /sub_catagories
  def index
    @sub_catagories = SubCatagory.all

    render json: @sub_catagories
  end

  # GET /sub_catagories/1
  def show
    render json: @sub_catagory
  end

  # POST /sub_catagories
  def create
    @sub_catagory = SubCatagory.new(sub_catagory_params)

    if @sub_catagory.save
      render json: @sub_catagory, status: :created, location: @sub_catagory
    else
      render json: @sub_catagory.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sub_catagories/1
  def update
    if @sub_catagory.update(sub_catagory_params)
      render json: @sub_catagory
    else
      render json: @sub_catagory.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sub_catagories/1
  def destroy
    @sub_catagory.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sub_catagory
      @sub_catagory = SubCatagory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sub_catagory_params
      params.fetch(:sub_catagory, {})
    end
end
