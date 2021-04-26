async function getSummary() {
    return await fetch('https://exp-app.azurewebsites.net/summary')
        .then(data3 => data3.json())
}

export default getSummary;
