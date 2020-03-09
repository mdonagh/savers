require 'test_helper'

class SubCatagoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sub_catagory = sub_catagories(:one)
  end

  test "should get index" do
    get sub_catagories_url, as: :json
    assert_response :success
  end

  test "should create sub_catagory" do
    assert_difference('SubCatagory.count') do
      post sub_catagories_url, params: { sub_catagory: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show sub_catagory" do
    get sub_catagory_url(@sub_catagory), as: :json
    assert_response :success
  end

  test "should update sub_catagory" do
    patch sub_catagory_url(@sub_catagory), params: { sub_catagory: {  } }, as: :json
    assert_response 200
  end

  test "should destroy sub_catagory" do
    assert_difference('SubCatagory.count', -1) do
      delete sub_catagory_url(@sub_catagory), as: :json
    end

    assert_response 204
  end
end
