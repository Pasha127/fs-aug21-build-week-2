const urlParams = new URLSearchParams(window.location.search);
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a5e347aa3emsh83ddf0a8da0766ep13759cjsn26ffa1895f30',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
};

const getAlbum = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${urlParams.get('album-id')}`, options)
    .then(response => response.json())
    .then(album => {
        let albumCover = document.getElementById("album-cover");
        let artistInfo = document.getElementById("artist")
        let trackslist = document.getElementById("track-list")
      
            
            albumCover.innerHTML = `<img class="cover-image" width="100%" src=${album.cover_medium}
            alt="album cover">`
            
            artistInfo.innerHTML =`   <div>
            <h6 class="text-white">album</h6>
            <h2 class="text-white">${album.title}</h2>
            <div class="d-flex">
            <img class="small-img" src=${album.artist.picture}
             alt="photo">
             <h6 class="text-white"><strong>${album.artist.name}</strong><strong>.</strong><strong>.</strong>${album.duration} min </h6>
            </div>`
         for (let i = 0; i < album.tracks.data.length; i++) {
            const track = album.tracks.data[i];
            
            trackslist.innerHTML +=`<div class="row justify-content-between" >
            <div class="d-flex">
            <div class="mt-2 mr-5">${i+1}</div>
            <div>
            <div>${track.title}</div>
            <div>${track.artist.name}</div>
            </div>
            </div>
            <div class="mr-4">${convertToMin(track.duration)} min</div>        
            </div>`
         }
        
    })
    .catch(err => console.log(err))}
    window.onload = ()=>{
        getAlbum();
    }

const convertToMin = (num) => {
   const getMinuts = Math.floor(num / 60)  
   const getSeconeds = num % 60
   return getMinuts + ":" + getSeconeds 
}