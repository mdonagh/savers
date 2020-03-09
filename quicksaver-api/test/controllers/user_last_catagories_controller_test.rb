require 'test_helper'

class UserLastCatagoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_last_catagory = user_last_catagories(:one)
  end

  test "should get index" do
    get user_last_catagories_url, as: :json
    assert_response :success
  end

  test "should create user_last_catagory" do
    assert_difference('UserLastCatagory.count') do
      post user_last_catagories_url, params: { user_last_catagory: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show user_last_catagory" do
    get user_last_catagory_url(@user_last_catagory), as: :json
    assert_response :success
  end

  test "should update user_last_catagory" do
    patch user_last_catagory_url(@user_last_catagory), params: { user_last_catagory: {  } }, as: :json
    assert_response 200
  end

  test "should destroy user_last_catagory" do
    assert_difference('UserLastCatagory.count', -1) do
      delete user_last_catagory_url(@user_last_catagory), as: :json
    end

    assert_response 204
  end
end
