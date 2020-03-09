class LikesController < ApplicationController
  before_action :set_like, only: [:show, :update, :destroy]

  # GET /likes
  def index
    @likes = Like.all

    render json: @likes
  end

  # GET /likes/1
  def show
    render json: @like
  end

  # POST /likes
  def create
    @like = Like.new(user_discount_id: params[:user_discount_id])
    @like.save
    user_discount = UserDiscount.find(params[:user_discount_id])
    user_discounts = UserDiscount.where(:user_id => user_discount.user_id).map { |itm|
      d = Discount.find(itm.discount_id)
      {
        name: d.name,
        desc: d.desc,
        expiration: d.expiration,
        telephone:  d.telephone,
        like: itm.like,
        user_discount: itm
      }
    }

    if user_discounts
      render json: {
        user_discounts: user_discounts,
        status: 200
      }
    else
      render json: { status: 403 }
    end
  end

  # PATCH/PUT /likes/1
  def update
    if @like.update(like_params)
      render json: @like
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  # DELETE /likes/1
  def destroy
    user_discount = UserDiscount.find(@like.user_discount_id)
    @like.destroy

    user_discounts = UserDiscount.where(:user_id => user_discount.user_id).map { |itm|
      d = Discount.find(itm.discount_id)
      {
        name: d.name,
        desc: d.desc,
        expiration: d.expiration,
        telephone:  d.telephone,
        like: itm.like,
        user_discount: itm
      }
    }

    if user_discounts
      render json: {
        user_discounts: user_discounts,
        status: 200
      }
    else
      render json: { status: 403 }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_like
      @like = Like.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def like_params
      params.require(:like).permit(
                    :user_discount_id
                  )
    end
end
