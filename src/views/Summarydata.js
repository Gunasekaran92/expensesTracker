async function getSummary() {
    return await fetch('http://test-app.canadacentral.azurecontainer.io/summary')
        .then(data3 => data3.json())
}

export default getSummary;