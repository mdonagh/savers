class UserLastCatagoriesController < ApplicationController
  before_action :set_user_last_catagory, only: [:show, :update, :destroy]

  # GET /user_last_catagories
  def index
    @user_last_catagories = UserLastCatagory.all

    render json: @user_last_catagories
  end

  # GET /user_last_catagories/1
  def show
    render json: @user_last_catagory
  end

  # POST /user_last_catagories
  def create
    puts params
    if params[:last_catagory_id].kind_of?(Array)
      for i in params[:last_catagory_id] do
        @user_last_catagory = UserLastCatagory.new(user_id: params[:user_id], last_catagory_id: i)
        @user_last_catagory.save
      end
    else
      @user_last_catagory = UserLastCatagory.new(user_id: params[:user_id], last_catagory_id: params[:last_catagory_id])
    end

    if @user_last_catagory.save
      last_catagories = UserLastCatagory.where(:user_id => params[:user_id])
      selected_catagories = last_catagories.map { |cat|
        cat.to_json(:include => [ {
          :last_catagory => {:include => {
          :sub_catagory => { :include => :catagory }
          } }
        }])
      }
      render json: {
        selected_catagories: selected_catagories,
        status: 200
      }
    else
      render json: { status: 403 }
    end
  end

  # PATCH/PUT /user_last_catagories/1
  def update
    if @user_last_catagory.update(user_last_catagory_params)
      render json: @user_last_catagory
    else
      render json: @user_last_catagory.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_last_catagories/1
  def destroy
    puts params
    user_id = 0
    arr = params[:id].split(',')
    if arr.kind_of?(Array)
      for i in arr do
        @user_last_catagory = UserLastCatagory.find(i.to_i)
        user_id = @user_last_catagory.user_id
        @user_last_catagory.destroy
      end
    else
      user_id = @user_last_catagory.user_id
      @user_last_catagory.destroy
    end

    if user_id
      last_catagories = UserLastCatagory.where(:user_id => user_id)
      selected_catagories = last_catagories.map { |cat|
        cat.to_json(:include => [ {
          :last_catagory => {:include => {
          :sub_catagory => { :include => :catagory }
          } }
        }])
      }
      render json: {
        selected_catagories: selected_catagories,
        status: 200
      }
    else
      render json: { status: 403 }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_last_catagory
      @user_last_catagory = UserLastCatagory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_last_catagory_params
      params.require(:user_last_catagory).permit(
                    :user_id,
                    :last_catagory_id
                  )
    end
end
