//element Definitions Start----------------------------------------------------
let trackDisplayArray = [];
let albumDisplayArray = [];
let songList = [];
let currentSongIndex = 0;
let songDataArr = [];
let likedArr = [];

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
const playerArt = document.querySelector(".playerArt");
const elapsedTime = document.querySelector(".elapsedTime");
const remainingTime = document.querySelector(".remainingTime");
const volumeContainer = document.querySelector(".volumeContainer");
const volumeBarFront = document.querySelector(".volumeBarFront");
const faVolumeOff = document.querySelector(".fa-volume-off");
const searchField  = document.querySelector(".searchField");
const searchFieldContainer = document.querySelector(".searchFieldContainer");
const smallSuggestionContainer = document.querySelector(".small-suggestion-container");         
const smallCardsArea = document.querySelector(".smallCardsArea");         
const searchBtn = document.querySelector(".searchBtn");
const header01 = document.querySelectorAll(".section-header")[0];
const header02 = document.querySelectorAll(".section-header")[1];
const header03 = document.querySelectorAll(".section-header")[2];
const userDataContainer = document.querySelector(".userDataContainer");
const userName = document.querySelector(".userName");
const albumInfoTitle = document.querySelector(".albumInfoTitle");
const albumInfoArtist = document.querySelector(".albumInfoArtist");
const likeBtn = document.querySelector(".likeBtn");
const likeBtnF = document.querySelector(".likeBtnF");
//element Definitions End----------------------------------------------------
const urlParams = new URLSearchParams(window.location.search);
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a5e347aa3emsh83ddf0a8da0766ep13759cjsn26ffa1895f30',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
};

const fetchsong = (songsurl) => {
    fetch(`${songsurl}`,options)
    .then(response => response.json())
    .then(songs => {

        console.log(songs.data)
        let popularsong = document.getElementById("popularsongs")

       


       
           for (let i = 0; i < songs.data.length; i++) {
            const track = songs.data[i];
            
           
            console.log(track)
            popularsong.innerHTML += `
           <div class="row justify-content-between mt-3" >
           <div>
            <span class="ml-5 text-white">${i+1}</span>
            <img height="40px" width="40px" class="ml-3" src="${track.album.cover_medium}" alt="">
            <span class="ml-3"><strong>${track.title_short}</strong></span>
            </div>
            <span>monthly lestners</span>
            <span>${convertToMin(track.duration)} min</span>
            </div>
            `
           }
    })
}



const convertToMin = (num) => {
    const getMinuts = Math.floor(num / 60)  
    const getSeconeds = num % 60
    return getMinuts + ":" + getSeconeds 
 }

const getAlbum = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${urlParams.get('artist-id')}`, options)
    .then(response => response.json())
    .then(artist => {
        let artistname = document.querySelector(".artist-name")
        console.log(artistname)
        let songsurl = artist.tracklist

       
       
        artistname.innerText = urlParams.get("artist-name")
        console.log(artist)

       let fans = document.getElementById("fans-number")
       fans.innerHTML = `${artist.nb_fan} monthly listener`


        fetchsong(songsurl)

    })
    .catch(err => console.log(err))}
////Music Player Start--------------------------------------------------------------------------------------------------------------
const like = () =>{
    likeBtn.classList.toggle("d-none");
    likeBtnF.classList.toggle("d-none");
    console.log("song data array",songDataArr[currentSongIndex])
    console.log("liked array prepush",likedArr)
    likedArr.push({...songDataArr[currentSongIndex]});
    console.log("liked array post push",likedArr)
    localStorage.setItem("liked", JSON.stringify(likedArr)) 
    
}
const clearLikes = () =>{
    localStorage.setItem("liked", []);
}
const playerClick = ()=> {
    playBtn.classList.toggle("d-none");
    pauseBtn.classList.toggle("d-none");
    if(!playBtn.classList.contains("d-none")){
        pauseSong();
        console.log('pause');
    }else{
        console.log('play');        
        playMusic();
    }
}
const addSong = (data) =>{    
    console.log(data.preview);
    songList[currentSongIndex].pause()
    currentSongIndex=songList.length-1;           
    //for(element of data.data){
        const newSong = new Audio(data.preview); 
        songList.push(newSong);
    //}
    if(pauseBtn.classList.contains("d-none")){
    playBtn.classList.toggle("d-none");
    pauseBtn.classList.toggle("d-none");}
    addSongInfo(data);

    nextSong();
    changePlayerInfo();
}
const addSongInfo = (data) =>{
    console.log('addsonginfo input', data)
    songDataArr.push(data)
    //for(element of data.data){songDataArr.push(element)};
    console.log('addsonginfo dataArr',songDataArr);
}

const nextSong = () =>{
    songList[currentSongIndex].pause();
    songList[currentSongIndex].currentTime = 0;
    currentSongIndex++;
    if(currentSongIndex > songList.length-1){currentSongIndex = 0;}
    playMusic()
    if(pauseBtn.classList.contains("d-none")){
        playBtn.classList.toggle("d-none");
        pauseBtn.classList.toggle("d-none");}
}
const prevSong = () =>{
    songList[currentSongIndex].pause();
    songList[currentSongIndex].currentTime = 0;
    currentSongIndex--;
    if(currentSongIndex < 0){currentSongIndex = songList.length-1}
    playMusic()
    if(pauseBtn.classList.contains("d-none")){
        playBtn.classList.toggle("d-none");
        pauseBtn.classList.toggle("d-none");}
}
const pauseSong = () =>{
    songList[currentSongIndex].pause()
}

const playMusic = () => {
    console.log('play music current song in song list',songList[currentSongIndex]);
    songList[currentSongIndex].addEventListener('timeupdate', updateProgress);
    songList[currentSongIndex].addEventListener('timeupdate', durTime);
    songList[currentSongIndex].play();
    changePlayerInfo();
    
}
const changePlayerInfo = () =>{
    playerArt.setAttribute('src', songDataArr[currentSongIndex].album.cover);
    albumInfoTitle.innerText = songDataArr[currentSongIndex].album.title;
    albumInfoArtist.innerText = songDataArr[currentSongIndex].artist.name;
}
const updateProgress = (e) => {   
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressBarFront.style.width = `${progressPercent}%`;
    if(progressPercent === 100){
        nextSong()
    }

      
}

const setProgress = (e) => {
    const widthF = progressBarFront.offsetWidth;
    const widthB = progressBarBack.offsetWidth;
    const clickX = e.offsetX;
    const percentage = (clickX/widthB);    
    const duration = songList[currentSongIndex].duration;
  
    songList[currentSongIndex].currentTime = percentage * duration;
  }
  
  const volumeChange = (e) => {
    const widthF = volumeBarFront.offsetWidth;
    const widthB = volumeContainer.offsetWidth;
    const clickX = e.offsetX;
    const percentage = (clickX/widthB);    
    const volume = songList[currentSongIndex].volume;
    volumeBarFront.style.width = (percentage*100)+"%"; 
    songList[currentSongIndex].volume = percentage;
}


const durTime = (e) => {
	const {duration,currentTime} = e.srcElement;
	let sec;
	let sec_d;

	
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	elapsedTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 
    
	
	get_sec_d (duration);

	// change duration DOM
	remainingTime.innerHTML = min_d +':'+ sec_d;
}


const optionsB = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': '71976e22femshc59a0991cc2347cp1afa84jsnf21821e7ac7a',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

const musicOnLoad = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=rick astley`, optionsB)
    .then(response => response.json())
    .then(response => initialMusic(response))
    .catch(err => console.error(err));  
}
const initialMusic = (data) => {
    //for(item of data.data){
        songList.push(new Audio(data.data[0].preview));
        songDataArr.push(data.data[0])
       // console.log(songDataArr,songList);
    //}
    changePlayerInfo();
}
const loadInitialContent = () =>{        
    musicOnLoad();
    loadSmallTracks("busta");
    loadTracks("queen");
}

window.onload = () => {

    getAlbum();
    /////Music PlayerVVVVVVVVVVVVVVVVVVVV
    playBtn.addEventListener("click", playerClick);
    pauseBtn.addEventListener("click", playerClick);
    searchBtn.addEventListener("click", showHideSearch);
    searchField.addEventListener("keypress", enterSearch);
    for(link of sideRecs){link.addEventListener("click", (e)=>{linkSearch(e)})}
    nextTrackBtn.addEventListener("click", nextSong);
    backTrackBtn.addEventListener("click", prevSong);
    progressBarBack.addEventListener("click", setProgress);
    likeBtn.addEventListener("click", like);
    likeBtnF.addEventListener("click", like);
    volumeContainer.addEventListener("click", volumeChange);
    likedArr = JSON.parse(localStorage.getItem("liked"));
    loadInitialContent();
    /////Music Player^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
}

////Music Player End----------------------------------------------------------------------------------------------------------------
////Search Function Start-----------------------------------------------------------------------------------------------------------
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
    header02.innerText = newText;

}
const enterSearch = (e)=>{
    if(e.key === 'Enter'){
        
        showHideSearch()
        loadTracks(searchField.value)
        changeHeader("Search Results");
        header01.classList.add("d-none");   
        header03.classList.add("d-none");   
        smallCardsArea.classList.add("d-none");   
    }
    }
const linkSearch = (e)=>{
    changeHeader(e.target.innerText);
    loadTracks(e.target.innerText);
}
////Search Function End-----------------------------------------------------------------------------------------------------------


 
