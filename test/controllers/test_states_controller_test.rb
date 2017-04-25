require 'test_helper'

class TestStatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @test_state = test_states(:one)
  end

  test "should get index" do
    get test_states_url, as: :json
    assert_response :success
  end

  test "should create test_state" do
    assert_difference('TestState.count') do
      post test_states_url, params: { test_state: { name: @test_state.name } }, as: :json
    end

    assert_response 201
  end

  test "should show test_state" do
    get test_state_url(@test_state), as: :json
    assert_response :success
  end

  test "should update test_state" do
    patch test_state_url(@test_state), params: { test_state: { name: @test_state.name } }, as: :json
    assert_response 200
  end

  test "should destroy test_state" do
    assert_difference('TestState.count', -1) do
      delete test_state_url(@test_state), as: :json
    end

    assert_response 204
  end
end
