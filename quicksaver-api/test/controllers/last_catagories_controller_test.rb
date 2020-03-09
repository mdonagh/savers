require 'test_helper'

class LastCatagoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @last_catagory = last_catagories(:one)
  end

  test "should get index" do
    get last_catagories_url, as: :json
    assert_response :success
  end

  test "should create last_catagory" do
    assert_difference('LastCatagory.count') do
      post last_catagories_url, params: { last_catagory: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show last_catagory" do
    get last_catagory_url(@last_catagory), as: :json
    assert_response :success
  end

  test "should update last_catagory" do
    patch last_catagory_url(@last_catagory), params: { last_catagory: {  } }, as: :json
    assert_response 200
  end

  test "should destroy last_catagory" do
    assert_difference('LastCatagory.count', -1) do
      delete last_catagory_url(@last_catagory), as: :json
    end

    assert_response 204
  end
end
