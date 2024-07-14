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

// next stuff

let all= [];

let container = document.querySelector("#Pics");
let Home = document.querySelector("#Home");
let Old = document.querySelector("#Old");
let New = document.querySelector("#New");
let Large = document.querySelector("#Large");
let Small = document.querySelector("#Small");
let MainDisplay = document.querySelector("#MainDisplay");

Home.addEventListener('click', () => {
    MainDisplay.textContent = 'Home';
    CreateCard(temples);
})
Old.addEventListener('click', () => {
    MainDisplay.textContent = 'Old';
    CreateCard(temples.filter( temple => Number(temple.dedicated.split(',')[0])< 1900));
})
New.addEventListener('click', () => {
    MainDisplay.textContent = 'New';
    CreateCard(temples.filter( temple => Number(temple.dedicated.split(',')[0])>2000));
})
Large.addEventListener('click', () => {
    MainDisplay.textContent = 'Large';
    CreateCard(temples.filter(temple => temple.area>90000))
})
Small.addEventListener('click', () => {
    MainDisplay.textContent = 'Small';
    CreateCard(temples.filter(temple => temple.area<10000));
})

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Barranquilla Colombia Temple",
        location: "Puertorico, Colombia",
        dedicated: "2018, December, 25",
        area: 25349,
        imageUrl:
        "images/2-Barranquilla-Columblia-Temple-2135201.jpg"
      },
      {
        templeName: "Arichorage Temple",
        location: "Aricorage, Alaska",
        dedicated: "2004, January, 9",
        area: 11937,
        imageUrl:
        "images/anchorage-temple-lds-253274-wallpaper.jpg"
      },
      {
        templeName: "Adelaide Temple",
        location: "Adelaide, Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl:
        "images/adelaide-australia-temple-lds-675332-wallpaper.jpg"
      },
      {
        templeName: "Acera Temple",
        location: "Acera, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "images/accra-ghana-temple-detail-249022-2400x1200.jpg"
      }
  ];

CreateCard(temples);
  
function CreateCard(templesFilter) {
  container.textContent = "";
    templesFilter.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedication.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Size ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}
