let query = 'queen';
let trackDisplayArray = [];
let albumDisplayArray = [];
const playerButtons   = document.querySelector(".playerButtons");
const playBtn = document.querySelector(".playBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const nextTrackBtn = document.querySelector(".nextTrackBtn");
const backTrackBtn = document.querySelector(".backTrackBtn");
const repeatBtn  = document.querySelector(".repeatBtn");
const shuffleBtn = document.querySelector(".shuffleBtn");
const progressBarBack = document.querySelector(".progressBarBack");
const progressBarFront = document.querySelector(".progressBarFront");
const playerTimes = document.querySelector(".playerTimes");
const elapsedTime = document.querySelector(".elapsedTime");
const remainingTime = document.querySelector(".remainingTime");
const volumeContainer = document.querySelector(".volumeContainer");
const faVolumeOff = document.querySelector(".fa-volume-off");
const volumeBarFront = document.querySelector(".volumeBarFront");
const queenSong = new Audio("./queen-another-one-bites-the-dust.mp3");
const rickRoll = new Audio("./rick-astley-never-gonna-give-you-up.mp3");
const searchField  = document.querySelector(".searchField");
const searchFieldContainer = document.querySelector(".searchFieldContainer");
const searchBtn = document.querySelector(".searchBtn");
const playMusic = () => {
    queenSong.play();
}
const playRick = () => {
    rickRoll.play();
}
const cardContainerTop = document.querySelectorAll(".cardContainer")

const showHideSearch = () =>{
    searchBtn.classList.toggle("d-none");
    searchBtn.classList.toggle("d-flex");
    searchFieldContainer.classList.toggle("d-none");
    searchFieldContainer.classList.toggle("d-flex");
}

const enterSearch = (e)=>{
    if(e.key === 'Enter'){
        showHideSearch()
        
    }
}


//clamp cards:
//var module = document.getElementById("clamp-this-module");
//
//$clamp(module, {clamp: 3});

window.onload = () => {
    playBtn.addEventListener("click", playMusic);
    const cardButtons = document.querySelectorAll(".hoverPlayButton")
    for(btn of cardButtons){btn.addEventListener("click", playRick)}
    playBtn.addEventListener("click", playMusic);
    searchBtn.addEventListener("click", showHideSearch);
    searchField.addEventListener("keypress", enterSearch);
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '71976e22femshc59a0991cc2347cp1afa84jsnf21821e7ac7a',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};


const loadTracks = (e) => {
    
    query= searchField.value;
    
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`, options)
        .then(response => response.json())
        .then(response => makeCards(response))
        .catch(err => console.error(err)); 
       
}
const makeCards = function (r) {
    //console.log(r);
   
    for(let i=0; i<r.data.length; i++){
        
        const newCard = document.createElement("div");
        newCard.innerHTML = `<div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <div class="card spotify-light-bg p-3" style="width: 12rem; height: 18rem;">
          <div class="hoverPlayButton"><div class="buttonTriangle"></div></div>
          <img src="https://cdns-images.dzcdn.net/images/cover/9a20f8b2547cbb74635539c219de3a84/500x500.jpg" class="card-img-top" alt="...">
          <div class="card-body p-0  bg-black">
              
              <h5 class="card-title text-truncate mb-1 pt-2">Playlist name</h5>
              <p class="card-text">Some quick example of text that is too long.</p>                                              
          </div>`;
        document.querySelector(".row").append(newCard);
    }
    countAlbums(r); 
    countTracks(r); 
    
}





//card example:
//<div class="col-6 col-sm-4 col-md-3 col-lg-2">
//<div class="card spotify-light-bg p-3" style="width: 12rem; height: 18rem;">
//<div class="hoverPlayButton"><div class="buttonTriangle"></div></div>
//<img src="https://cdns-images.dzcdn.net/images/cover/9a20f8b2547cbb74635539c219de3a84/500x500.jpg" class="card-img-top" alt="...">
//<div class="card-body p-0  bg-black">
//    
//    <h5 class="card-title text-truncate mb-1 pt-2">Playlist name</h5>
//    <p class="card-text">Some quick example of text that is too long.</p>                                              
//</div>