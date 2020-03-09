class UserDiscountsController < ApplicationController
  before_action :set_user_discount, only: [:show, :update, :destroy]

  # GET /user_discounts
  def index
    @user_discounts = UserDiscount.all

    render json: @user_discounts
  end

  # GET /user_discounts/1
  def show
    render json: @user_discount
  end

  # POST /user_discounts
  def create
    @user_discount = UserDiscount.new(user_discount_params)

    if @user_discount.save
      render json: @user_discount, status: :created, location: @user_discount
    else
      render json: @user_discount.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_discounts/1
  def update
    if @user_discount.update(user_discount_params)
      render json: @user_discount
    else
      render json: @user_discount.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_discounts/1
  def destroy
    @user_discount.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_discount
      @user_discount = UserDiscount.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_discount_params
      params.fetch(:user_discount, {})
    end
end
