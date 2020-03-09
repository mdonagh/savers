class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  def login
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])

      last_catagories = UserLastCatagory.where(:user_id => @user.id)
      selected_catagories = last_catagories.map { |cat|
        cat.to_json(:include => [ {
          :last_catagory => {:include => {
          :sub_catagory => { :include => :catagory }
          } }
        }])
      }

      all_catagories = Catagory.all.map { |cat|
        {
          id: cat.id,
          name: cat.name,
          created_at: cat.created_at,
          updated_at: cat.updated_at,
          sub_catagories: SubCatagory.where(:catagory_id => cat.id).map { |sub_cat|
            {
              id: sub_cat.id,
              catagory_id: sub_cat.catagory_id,
              name: sub_cat.name,
              created_at: sub_cat.created_at,
              updated_at: sub_cat.updated_at,
              last_catagories: LastCatagory.where(:sub_catagory_id => sub_cat.id)
            }
          }
        }
      }

      user_discounts = UserDiscount.where(:user_id => @user.id).map { |itm|
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

      render json: {
        body: @user,
        selected_catagories: selected_catagories,
        all_catagories: all_catagories,
        user_discounts: user_discounts,
        status: 200
      }
    else
      render json: { status: 403 }
    end
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(email: params[:email], password: params[:password], full_name: params[:full_name])
    all_catagories = Catagory.all.map do |cat|
      {
        id: cat.id,
        name: cat.name,
        created_at: cat.created_at,
        updated_at: cat.updated_at,
        sub_catagories: SubCatagory.where(:catagory_id => cat.id).map { |sub_cat|
          {
            id: sub_cat.id,
            catagory_id: sub_cat.catagory_id,
            name: sub_cat.name,
            created_at: sub_cat.created_at,
            updated_at: sub_cat.updated_at,
            last_catagories: LastCatagory.where(:sub_catagory_id => sub_cat.id)
          }
        }
      }
    end

    if @user.save
      user_discounts = Discount.all.map { |d|
        itm = UserDiscount.create(user_id: @user.id, discount_id: d.id)
        {
          name: d.name,
          desc: d.desc,
          expiration: d.expiration,
          telephone: d.telephone,
          like: itm.like,
          user_discount: itm
        }
      }

      render json: {
        body: @user,
        all_catagories: all_catagories,
        user_discounts: user_discounts,
        status: 200
      }
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def send_password_reset
    @user = User.find_by(email: params[:email])
    if @user
      @user.update_attribute(:reset_password, true)
      newPass = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
      string = (0...5).map { newPass[rand(newPass.length)] }.join
      @user.update_attribute(:password, string)
      render json: {
        body: string,
        status: 200
      }
    else
      render json: { status: 400 }
    end

    # UserMailer.with(user: @user).welcome_email..deliver_now
    # EMAIL PASSWORD
  end

  def reset_password
    @user = User.find_by(email: params[:email])
    @user.update_attribute(:password,  params[:password])
    @user.update_attribute(:reset_password, false)
    render json: { status: 200 }
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(
                    :email,
                    :password,
                    :full_name,
                    :reset_password,
                    :img_url
                  )
      end
end
