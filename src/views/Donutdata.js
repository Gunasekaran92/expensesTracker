async function getDonut() {
    return await fetch('http://test-app.canadacentral.azurecontainer.io/donut')
    .then(data1 => data1.json())
}

export default getDonut;