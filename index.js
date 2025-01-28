
const temperatureF = prompt("TempF");



function convertToCelsius(temperatureF) {
    return (temperatureF - 32) * (5 / 9);

}

function describeTemperature(temperatureF) {
    const temperatureC = convertToCelsius(temperatureF);

    let description;

    if (temperatureC < 0) {
        description = "very cold"
    } else if (temperatureC < 20) {
        description = "cold"
    } else if (temperatureC < 30) {
        description = "warm"
    } else if (temperatureC < 40) {
        description = "hot"
    } else if (temperatureC >= 40) {
        description = "very hot"
    }

    return `the temp is ${temperatureC} degrees celsius. that is ${description}`
}

let description = describeTemperature(temperatureF);

alert(description)