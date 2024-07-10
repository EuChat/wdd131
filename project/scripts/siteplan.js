let year = document.querySelector('#year')
let lastMod = document.querySelector('#lastModified')

let today = new Date()
year.innerHTML += today.getFullYear()

lastMod.innerHTML += document.lastModified;