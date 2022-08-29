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




window.onload = () => {
    playBtn.addEventListener("click", playMusic);
}