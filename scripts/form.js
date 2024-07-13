const today = new Date();
let year = document.querySelector("#year");
year.textContent += `${today.getFullYear()}`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML += text;


let ProductName = document.querySelector("#ProductName");

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },

    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

CreateOption(products);

function CreateOption(Optionarray) {
      Optionarray.forEach(option => {
          let opt = document.createElement("OPTION");
           
          opt.text = option.name;
          opt.value = option.id;

          ProductName.appendChild(opt);
      });
  }
 