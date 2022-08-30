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
const playMusic = () => {
    queenSong.play();
}
const cardContainerTop = document.querySelectorAll(".cardContainer")




//clamp cards:
//var module = document.getElementById("clamp-this-module");
//
//$clamp(module, {clamp: 3});

window.onload = () => {
    playBtn.addEventListener("click", playMusic);
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
