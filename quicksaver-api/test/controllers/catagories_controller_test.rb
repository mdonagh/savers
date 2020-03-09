require 'test_helper'

class CatagoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @catagory = catagories(:one)
  end

  test "should get index" do
    get catagories_url, as: :json
    assert_response :success
  end

  test "should create catagory" do
    assert_difference('Catagory.count') do
      post catagories_url, params: { catagory: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show catagory" do
    get catagory_url(@catagory), as: :json
    assert_response :success
  end

  test "should update catagory" do
    patch catagory_url(@catagory), params: { catagory: {  } }, as: :json
    assert_response 200
  end

  test "should destroy catagory" do
    assert_difference('Catagory.count', -1) do
      delete catagory_url(@catagory), as: :json
    end

    assert_response 204
  end
end
