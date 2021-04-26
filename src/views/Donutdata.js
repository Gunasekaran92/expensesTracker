async function getDonut() {
    return await fetch('https://exp-app.azurewebsites.net//donut')
    .then(data1 => data1.json())
}

export default getDonut;
