const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const temp = 10;
const conditions = 'Partly Cloudy';
const wind = 7;

function CalculateWindChill() {
    return Math.round( 13.12 + (0.6215 * temp) - (11.37 * wind *0.16) + (0.3965 *temp * wind* 0.16)); 
} 

const Temperature = document.querySelector("#Temperature");
const WindSpeed = document.querySelector("#Wind");
const Conditions = document.querySelector("#Conditions");
const WindChill = document.querySelector("#WindChill");

Temperature.insertAdjacentText('afterbegin', temp);
WindSpeed.insertAdjacentText('afterbegin', wind);
Conditions.textContent = conditions;

if (temp<=10 && wind>4.8) {
    WindChill.insertAdjacentText('afterbegin', CalculateWindChill());
} else {
    WindChill.textContent = "N/A";
}
