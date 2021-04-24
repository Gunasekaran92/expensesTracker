async function getMetricL() {
    return await fetch('http://127.0.0.1:5000/metricO')
    .then(data1 => data1.json())
}

export default getMetricL;