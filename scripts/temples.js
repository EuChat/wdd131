let year = document.querySelector('#year')
let lastMod = document.querySelector('#lastModified')

let today = new Date()
year.innerHTML += today.getFullYear()

lastMod.innerHTML += document.lastModified;

// Store the selected elements that we are going to use. 
let hamCount = 0;

const mainnav = document.querySelector('.navigation')

const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {

    mainnav.classList.toggle('show');

    hambutton.classList.toggle('show');
    if (hamCount == 0) {
        hambutton.textContent = 'X';
        hamCount = 1 ;
    }
    else{
        hambutton.textContent = '≡';
        hamCount = 0;
    }
});

