class TestsController < ApplicationController
  before_action :set_test, only: [:show, :update, :destroy]


  # GET /tests
  #def index
  #  @tests = Test.all
	
  #  render json: @tests
  #end

  def index
    @tests = Test
    if params[:feature_id].present?
      @tests = @tests.where(feature_id: test_params[:feature_id])
      render json: @tests
    else
      #TODO Manage the error
    end
  end

  # GET /tests/1
  def show
    render json: @test
  end

  # POST /tests
  def create
    deserialized_params = deserialize_params
    default_test_state = TestState.where(name: 'Undefined')
    deserialized_params[:test_state_id] = default_test_state[0][:id]    
    deserialized_params[:name] = createNewTestName(deserialized_params)
    @test = Test.new(deserialized_params)

    if @test.save
      puts json: @test, status: :created, location: @test
      render json: @test, status: :created, location: @test
    else
      render json: @test.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tests/1
  def update
    deserialized_params = deserialize_params
	puts '------------------------------------------------------------------------------------------------------------------------------------------------------'
	puts deserialized_params.inspect
	puts '------------------------------------------------------------------------------------------------------------------------------------------------------'
    if @test.update(deserialized_params)
      render json: @test
    else
      render json: @test.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tests/1
  def destroy
    @test.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test
      @test = Test.find(params[:id])
    end

    def createNewTestName(deserialized_params)
      otherTestsFromSameFeature = sortOtherTestsByName(Test.where(feature_id: deserialized_params[:feature_id]))
      puts otherTestsFromSameFeature.inspect
      firstNumberAvailable = 1
      otherTestSize = otherTestsFromSameFeature.count
      newTestName = "Test #{firstNumberAvailable}"

      while firstNumberAvailable - 1 < otherTestSize and newTestName == otherTestsFromSameFeature[firstNumberAvailable - 1][:name] do
        firstNumberAvailable += 1
        newTestName = "Test #{firstNumberAvailable}"
      end
   
      return newTestName
    end

    def sortOtherTestsByName(otherTestsFromSameFeature)
      return otherTestsFromSameFeature.sort_by { |testSortByNameNumber| (testSortByNameNumber[:name][/\d+/].to_i) }
    end

    def deserialize_params
      return ActiveModelSerializers::Deserialization.jsonapi_parse(params)
    end

    # Only allow a trusted parameter "white list" through.
    def test_params
      params.permit(:name, :feature_id, :test_state_id)
    end
end
