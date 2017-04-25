bin/rails generate scaffold feature name;
bin/rails generate scaffold test_state name;
bin/rails generate scaffold test name feature:references test_state:references
