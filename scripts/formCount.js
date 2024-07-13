 
let VisitDisplay = document.querySelector("#VisitCount");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
VisitDisplay.textContent += numVisits;
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
