import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    vus: 100,
    duration: '1m',
};

export default function () {
    const url = 'https://git.sheetjs.com/api/v1/repos/SheetJS/sheetjs'; 

    const response = http.get(url);

    check(response, {
        'status is 200': (r) => r.status === 200,
    });

    sleep(1);
}


export function handleSummary(data) {
    return {
        "summary_repo_status.html": htmlReport(data),
    };
}