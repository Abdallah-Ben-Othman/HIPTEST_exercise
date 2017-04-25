class TestSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :feature
  has_one :test_state
end
