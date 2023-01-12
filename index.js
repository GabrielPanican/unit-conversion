/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert")
let inputEl = document.getElementById("input")
let lenghtEl = document.getElementById("lenght")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lenghtEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | 
    ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters` 
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} litres`
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds |
    ${baseValue} pound = ${(baseValue / kiloToPound).toFixed(3)} kilos`
})