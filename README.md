# Gitea Server Load Testing

This repository contains k6 scripts to load test a self-hosted Gitea server. The tests include cloning repositories, checking repository status, and testing the web interface.

## Prerequisites

- k6 installed on your local machine Follow the [k6 installation guide](https://k6.io/docs/getting-started/installation/) if needed.

## Run
1. Make the script `run_k6_test.sh` executable:
```bash
chmod +x run_k6_test.sh
```
2. Run the tests sequentially:
```bash
./run_k6_test.sh
```

## Report
After running the tests, each test will generate a JSON report in the `reports/` directory, convert the report to HTML, and merge all the HTML reports into a single `merged_report.html` file.


## Example Report
<img src="https://i.ibb.co/ScKrDV7/home-dark-work-shj-k6-load-test-gitea-shjs-summary-clone-test-html-Average-browserwindow.png" />