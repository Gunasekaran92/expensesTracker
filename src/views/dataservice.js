
import getDonut from './Donutdata';
import getLine from './Linedata';
import getSummary from './Summarydata';

function getRandomDelay() {
    return 500 + (Math.random() * 2000);
}


export function getDonutData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getDonut());
        }, getRandomDelay());
    })

}


export function getLineData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getLine());
        }, getRandomDelay());
    })
}

export function getSummaryData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getSummary());
        }, getRandomDelay());
    })
}
