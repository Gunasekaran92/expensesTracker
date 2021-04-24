
async function getLine() {
    return await fetch('http://test-app.canadacentral.azurecontainer.io/line')
        .then(data2 => data2.json())
        .then(data => data)
}


export default getLine;