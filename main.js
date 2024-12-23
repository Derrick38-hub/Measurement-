//convert miles to kilometers
function milesToKm(miles) {
    return miles * 1.60934;
}

// convert kilometers to miles
function kmToMiles(km) {
    return km / 1.60934;
}

//  convert centimeters to inches
function cmToInches(cm) {
    return cm / 2.54;
}

// Convert inches to centimeters
function inchesToCm(inches) {
    return inches * 2.54;
}

// Convert feet to meters
function feetToMeters(feet) {
    return feet * 0.3048;
}

//convert meters to feet
function metersToFeet(meters) {
    return meters / 0.3048;
}

// Temperature 
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

// Weight Conversions
function kgToGrams(kg) {
    return kg * 1000;
}

function gramsToKg(grams) {
    return grams / 1000;
}

function kgToPounds(kg) {
    return kg * 2.20462;
}

function poundsToKg(pounds) {
    return pounds / 2.20462;
}

function ouncesToPounds(ounces) {
    return ounces / 16;
}

function poundsToOunces(pounds) {
    return pounds * 16;
}

// Submission
function handleFormSubmit(event) {
    event.preventDefault();
}

// Input values
const miles = Number(document.getElementById('miles').value);
const km = Number(document.getElementById('km').value);
const inches = Number(document.getElementById('inches').value);
const feet = Number(document.getElementById('feet').value);
const meters = Number(document.getElementById('meters').value);

const celsius = Number(document.getElementById('celsius').value);
const fahrenheit = Number(document.getElementById('fahrenheit').value);
const kelvin = Number(document.getElementById('kelvin').value);

const kg = Number(document.getElementById('kg').value);
const grams = Number(document.getElementById('grams').value);
const pounds = Number(document.getElementById('pounds').value);
const ounces = Number(document.getElementById('ounces').value);

// Conversion results
const kmResult = milesToKm(miles);
const milesResult = kmToMiles(km);
const cmResult = inchesToCm(inches);
const inchesResult = cmToInches(inches);
const metersResult = feetToMeters(feet);
const feetResult = metersToFeet(meters);

const fahrenheitResult = celsiusToFahrenheit(celsius);
const celsiusResult = fahrenheitToCelsius(fahrenheit);
const kelvinResult = celsiusToKelvin(celsius);
const kelvinToCelsiusResult = kelvinToCelsius(kelvin);

const gramsResult = kgToGrams(kg);
const kgFromGrams = gramsToKg(grams);
const poundsResult = kgToPounds(kg);
const kgFromPounds = poundsToKg(pounds);
const ouncesFromPounds = poundsToOunces(pounds);
const poundsFromOunces = ouncesToPounds(ounces);

// Output results
document.getElementById('output').innerHTML = `
    <h2>Length Conversions</h2>
    <p>${miles} miles is ${kmResult.toFixed(2)} kilometers</p>
    <p>${km} kilometers is ${milesResult.toFixed(2)} miles</p>
    <p>${inches} inches is ${cmResult.toFixed(2)} centimeters</p>
    <p>${cmResult.toFixed(2)} centimeters is ${inchesResult.toFixed(2)} inches</p>
    <p>${feet} feet is ${metersResult.toFixed(2)} meters</p>
    <p>${meters} meters is ${feetResult.toFixed(2)} feet</p>

    <h2>Temperature Conversions</h2>
    <p>${celsius}°C is ${fahrenheitResult.toFixed(2)}°F and ${kelvinResult.toFixed(2)}K</p>
    <p>${fahrenheit}°F is ${celsiusResult.toFixed(2)}°C</p>
    <p>${kelvin}K is ${kelvinToCelsiusResult.toFixed(2)}°C</p>

    <h2>Weight Conversions</h2>
    <p>${kg} kg is ${gramsResult.toFixed(2)} grams and ${poundsResult.toFixed(2)} pounds</p>
    <p>${grams} grams is ${kgFromGrams.toFixed(2)} kg</p>
    <p>${pounds} pounds is ${ouncesFromPounds.toFixed(2)} ounces and ${kgFromPounds.toFixed(2)} kg</p>
    <p>${ounces} ounces is ${poundsFromOunces.toFixed(2)} pounds</p>
`;

// Attach event listener to form submit
const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);
