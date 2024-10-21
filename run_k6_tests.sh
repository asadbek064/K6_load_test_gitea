#!/bin/bash

declare -a tests=(
    "./tests/git_clone_multi_repo_test.js"
    "./tests/repo_status.js"
    "./tests/git_clone_test.js"
    "./tests/web_interface_test.js"
)

# Loop through each test file and run them one by one
for test in "${tests[@]}"; do
    echo "Running test: $test"
    
    test_name=$(basename "$test" .js)

    # run the k6 test and save the output to a JSON file
    k6 run --out json=./reports/"$test_name"_results.json "$test"
    sleep 1
done

echo "All tests completed and reports generated.\n"
