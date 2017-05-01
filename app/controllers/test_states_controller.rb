class TestStatesController < ApplicationController
  before_action :set_test_state, only: [:show, :update, :destroy]

  # GET /test_states
  def index
    @test_states = TestState.all

    render json: @test_states
  end

  # GET /test_states/1
  def show
    render json: @test_state
  end

  # POST /test_states
  def create
    @test_state = TestState.new(test_state_params)

    if @test_state.save
      render json: @test_state, status: :created, location: @test_state
    else
      render json: @test_state.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /test_states/1
  def update
    if @test_state.update(test_state_params)
      render json: @test_state
    else
      render json: @test_state.errors, status: :unprocessable_entity
    end
  end

  # DELETE /test_states/1
  def destroy
    @test_state.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test_state
      @test_state = TestState.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def test_state_params
      #params.require(:test_state).permit(:name)
    end
end
