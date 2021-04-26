
async function getLine() {
    return await fetch('https://exp-app.azurewebsites.net/line')
        .then(data2 => data2.json())
        .then(data => data)
}


export default getLine;
