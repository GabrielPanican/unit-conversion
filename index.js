/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
1 kilometre = 0.621 miles
1 celsius = 33.8 fahrenheit
*/

let convertBtn = document.getElementById("convert")
let inputEl = document.getElementById("input")
let lenghtEl = document.getElementById("lenght")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
let distanceEl = document.getElementById("distance")
let temperatureEl = document.getElementById("temperature")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204
const kilometreToMiles = 0.621
const celsiusToFahrenheit = 33.8

document.querySelector(inputEl).addEventListener("click").textContent = ''
convertBtn.addEventListener("click", function() {
    
    let baseValue = inputEl.value
    
    lenghtEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | 
    ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters` 
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons |
     ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} litres`
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds |
    ${baseValue} pound = ${(baseValue / kiloToPound).toFixed(3)} kilos`
    distanceEl.textContent = `${baseValue} kilometres = ${(baseValue * kilometreToMiles).toFixed(3)} miles | 
    ${baseValue} miles = ${(baseValue / kilometreToMiles).toFixed(3)} kilometres`
    temperatureEl.textContent = `${baseValue} celsius = ${(baseValue * celsiusToFahrenheit).toFixed(3)} fahrenheit |
    ${baseValue} fahrenheit = ${(baseValue / celsiusToFahrenheit).toFixed(3)} celsius`
})