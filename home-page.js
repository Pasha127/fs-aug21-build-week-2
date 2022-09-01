let trackDisplayArray = [];
let albumDisplayArray = [];
const sideRecs = document.querySelectorAll(".sideRec");
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
const header01 = document.querySelectorAll(".section-header")[0];
const userDataContainer = document.querySelector(".userDataContainer");
const userName = document.querySelector(".userName");

const showUser = (user)=>{
    userName.innerText = user; 
}



const playMusic = () => {
    queenSong.play();
}
const playRick = () => {
    rickRoll.play();
}
const playSong = (input)=>{
    console.log("playSong input:", input);
    const song = new Audio(input);
    song.play();
    console.log("music");
}
const cardContainerTop = document.querySelectorAll(".cardContainer")

const showHideSearch = () =>{
    searchBtn.classList.toggle("d-none");
    searchBtn.classList.toggle("d-flex");
    searchFieldContainer.classList.toggle("d-none");
    searchFieldContainer.classList.toggle("d-flex");
    if(!searchField.classList.contains("d-none")){
        searchField.focus();
    }
    
}
const changeHeader = (newText)=>{
    header01.innerText = newText;

}

const enterSearch = (e)=>{
    if(e.key === 'Enter'){
        
        showHideSearch()
        loadTracks(searchField.value)
    }
    changeHeader("Search Results");
}
const linkSearch = (e)=>{
    changeHeader(e.target.innerText);
    loadTracks(e.target.innerText);
}

//clamp cards:
//var module = document.getElementById("clamp-this-module");
//
//$clamp(module, {clamp: 3});


const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': '71976e22femshc59a0991cc2347cp1afa84jsnf21821e7ac7a',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

const loadTracks = (input) => {    
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${input}`, options)
    .then(response => response.json())
    .then(response => makeCards(response))
    .catch(err => console.error(err));  
}

const loadSmallTracks = (input) => {    
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${input}`, options)
    .then(response => response.json())
    .then(response => makeSmallCards(response))
    .catch(err => console.error(err));  
}
const makeCards = function (r) {
    document.querySelector(".spinnerContainer").classList.add("d-none");
    const oldCards = document.querySelectorAll(".cardBack");
    for(card of oldCards){card.remove()};
    console.log(r);   
    for(let i=0; i<6; i++){        
        const newCard = document.createElement("div");
        const hoverBtn = document.createElement("div");
        hoverBtn.classList.add("hoverPlayButton");
        const hoverTri = document.createElement("div");
        hoverTri.classList.add("buttonTriangle");
        newCard.setAttribute("class", 'col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2 mb-4 cardBack')
        newCard.innerHTML = `
        <div class="card spotify-light-bg p-3" style="width: 12rem; height: 18rem;">        
        <img src="${r.data[i].album.cover_medium}" class="card-img-top" alt="...">
        <div class="card-body p-0  bg-black">
        
        <h5 class="card-title text-truncate mb-1 pt-2"><a href="./album-page.html?album-id=${r.data[i].album.id}">${r.data[i].title}</a></h5>
        <p class="card-text"><a href="./artist-page.html?album-id=${r.data[i].artist.id}">${r.data[i].artist.name}</a></p>                                              
        </div>`;
        document.querySelector(".row.my-4.cardContainer").append(newCard);
        newCard.querySelector(".card").prepend(hoverBtn);  
        hoverBtn.append(hoverTri);
        
        hoverBtn.addEventListener("click", () => {playSong(r.data[i].preview)});
    }
    
    
}

window.onload = () => {
    playBtn.addEventListener("click", playMusic);
    const cardButtons = document.querySelectorAll(".hoverPlayButton")
    for(btn of cardButtons){btn.addEventListener("click", playRick)}
    playBtn.addEventListener("click", playMusic);
    searchBtn.addEventListener("click", showHideSearch);
    searchField.addEventListener("keypress", enterSearch);
    loadTracks("queen");
    loadSmallTracks("queen");
    for(link of sideRecs){link.addEventListener("click", (e)=>{linkSearch(e)})}

}

const makeSmallCards = (r) => {
    const container = document.querySelector(".smallCardsContainer")
    console.log(r)
    for (let i = 0; i < 12; i++) {
        const album = r.data[i];
        const newCard = document.createElement("div")
        newCard.setAttribute("class", 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 ')
        newCard.innerHTML = ` <div class="tamplet ">
        <div class="row">
            <div class="col-4">
                <img src=${album.album.cover_medium} height="100px" width="100%" alt="">

            </div>
            <div class="col-8 d-flex">
                <p class="align-self-center text-white">${album.title}</p>
            </div>
        </div>
    </div>`
     container.append(newCard)
    }
    

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