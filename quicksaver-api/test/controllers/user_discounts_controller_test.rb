require 'test_helper'

class UserDiscountsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_discount = user_discounts(:one)
  end

  test "should get index" do
    get user_discounts_url, as: :json
    assert_response :success
  end

  test "should create user_discount" do
    assert_difference('UserDiscount.count') do
      post user_discounts_url, params: { user_discount: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show user_discount" do
    get user_discount_url(@user_discount), as: :json
    assert_response :success
  end

  test "should update user_discount" do
    patch user_discount_url(@user_discount), params: { user_discount: {  } }, as: :json
    assert_response 200
  end

  test "should destroy user_discount" do
    assert_difference('UserDiscount.count', -1) do
      delete user_discount_url(@user_discount), as: :json
    end

    assert_response 204
  end
end
