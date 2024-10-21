import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 100, 
    duration: '1m', 
};

export default function () {
    const repos = [
        'https://git.sheetjs.com/sheetjs/docs.sheetjs.com.git',
        'https://git.sheetjs.com/sheetjs/sheetjs.git',
        'https://git.sheetjs.com/sheetjs/js-crc32.git',
        'https://git.sheetjs.com/sheetjs/iwa-inspector.git',
        'https://git.sheetjs.com/sheetjs/bessel.git',
        'https://git.sheetjs.com/sheetjs/frac.git',
        'https://git.sheetjs.com/sheetjs/js-codepage.git',
        'https://git.sheetjs.com/sheetjs/printj.git',
        'https://git.sheetjs.com/sheetjs/js-cfb.git',
        'https://git.sheetjs.com/sheetjs/cfb-editor.git',
        'https://git.sheetjs.com/sheetjs/bz2.git',
        'https://git.sheetjs.com/sheetjs/js-adler32.git',
        'https://git.sheetjs.com/sheetjs/js-vdc.git',
        'https://git.sheetjs.com/sheetjs/sheetaki.git',
        'https://git.sheetjs.com/sheetjs/js-wmf.git',
        'https://git.sheetjs.com/sheetjs/notes.git'
    ];

    // randomly select a repository from the list
    const repo = repos[Math.floor(Math.random() * repos.length)];

    const response = http.get(repo);

    check(response, {
        'status is 200': (r) => r.status === 200,
    });

    sleep(1);
}

export function handleSummary(data) {
    return {
        "summary_git_clone_multi_repo.html": htmlReport(data),
    };
}