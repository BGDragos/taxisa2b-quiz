// Game questions

let locationKnow = [
  {
    name: "Dublin Airport",
    image: "assets/images/dub.jpg",
    location: [" Dublin Southside", "Dublin Centre", "Dublin Airport", "Dublin West"],
  },
  {
    name: "Glasnevin Cemetery",
    image: "assets/images/glasnevin.jpg",
    location: ["Kilmainham Gaol", "Glasnevin Cemetery", "Dublin Castle", "St. Patrick`s Cathedral"],
  },
  {
      name: "Kilmainham Gaol",
      image: "assets/images/gaol.jpg",
      location: ["Kilmainham Gaol", "Temple Bar", "Dublin Castle", "St. Patrick`s Cathedral"],
    },
  {
    name: "Guinness Storehouse",
    image: "assets/images/guinness.jpg",
    location: ["Dublin Castle", "Guinness Storehouse","Trinity College", "Temple Bar"],
  },
  {
      name: "Dublin Castle",
      image: "assets/images/castle.jpg",
      location: ["St. Patrick`s Cathedral", "Dublin Castle", "Temple Bar", "Kilmainham Gaol"],
  },
  {
      name: "Botanic Gardens",
      image: "assets/images/botanic.jpg",
      location: ["Kilmainham Gaol", "Temple Bar", "Botanic Gardens", "St. Patrick`s Cathedral"],
    },
  {
      name: "St. Patrick`s Cathedral",
      image: "assets/images/stpatrick.jpg",
      location: ["Guinness Storehouse", "Dublin Castle", "St. Patrick`s Cathedral" ,"Trinity College"],
  },
  {
      name: "Trinity College",
      image: "assets/images/trinity.jpg",
      location: ["Trinity College", "Temple Bar", "Guinness Storehouse", "Kilmainham Gaol"],
  },
  {
      name: "Jameson Distillery",
      image: "assets/images/Jameson.jpg",
      location: ["Kilmainham Gaol", "Jameson Distillery", "Dublin Castle", "St. Patrick`s Cathedral"],
    },
  {
      name: "Temple Bar",
      image: "assets/images/tbar.jpg",
      location: ["Temple Bar", "Trinity College", "Kilmainham Gaol", "Guinness Storehouse"],
  },
];


// Function to give name to each button using names from locationKnow

function bookDublin(name) {
  let div = document.getElementById("div-location");
  div.innerHTML += `
    <button class="guess-option" onclick="clickIt('${name}')">
        ${name}
    </button>`;
}

let indice = 0;
let road = 0;

  function whichImg() {
    let city = locationKnow[indice];
    let image = document.getElementById("dublin-image-center");
    image.setAttribute('src', city.image);

    // adding console.log to print all the source code from the console for images
    console.log(image.getAttribute("src"));
  
    let divLocation = document.getElementById("div-location");
    divLocation.innerHTML = "";
  //buttons name
    city.location.forEach((option) => {
        bookDublin(option);
    });
    
  }

  whichImg();
 
    // Function for change the color after good/wrong answers 

    let gameArea = document.getElementById("check-dublin");

    function correct(){
        gameArea.style.backgroundColor = "rgba(96, 255, 199, 1)";
        alert("That's RIGHT!");
      }
    
    function wrong(){
        gameArea.style.backgroundColor = "rgba(255, 166, 164, 1)";
        alert("That's WRONG!");
      }
   
      // Function for increment good/wrong answer after you click it

      function addGood() {

        let yourScor = parseInt(document.getElementById("marked").innerText);
        document.getElementById("marked").innerText = ++yourScor;
        
    }
    
    function addWrong() {
    
        let yourScor = parseInt(document.getElementById("un-marked").innerText);
        document.getElementById("un-marked").innerText = ++yourScor;
      
    }
  
    // Function to call each function and validate each option from buttons

    function clickIt(option) {
      let city = locationKnow[indice];
      let goodAnswer = city.name === option;
      if (goodAnswer) {
        indice++;
       road++;
          correct();
          addGood();
          whichImg();
      } else {
          wrong();
          addWrong();
      }
    }