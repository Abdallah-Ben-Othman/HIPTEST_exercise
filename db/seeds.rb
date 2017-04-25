# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

stateUndefined = TestState.create(name: "Undefined")
statePassed = TestState.create(name: "Passed")
stateFailed = TestState.create(name: "Failed")

feature1 = Feature.create(name: "Feature 1")
feature2 = Feature.create(name: "Feature 2")

test1Feature1 = Test.create(name: "Test 1", feature: feature1, test_state: stateUndefined)
test2Feature1 = Test.create(name: "Test 2", feature: feature1, test_state: stateUndefined)
test3Feature1 = Test.create(name: "Test 3", feature: feature1, test_state: stateUndefined)

test1Feature2 = Test.create(name: "Test 1", feature: feature2, test_state: stateUndefined)
test2Feature2 = Test.create(name: "Test 2", feature: feature2, test_state: stateUndefined)
