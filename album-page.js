const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a5e347aa3emsh83ddf0a8da0766ep13759cjsn26ffa1895f30',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
};

const getAlbum = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${urlParams.get('id')}`, options)
    .then(response => response.json())
    .then(album => {
        let albumCover = document.getElementById("album-cover");
        let artistInfo = document.getElementById("artist")
        let trackslist = document.getElementById("track-list")
      
            console.log(album)
            albumCover.innerHTML = `<img height="150vh" width="100%" src=${album.cover_medium}
            alt="this is photo">`
            
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
            console.log(track)
            trackslist.innerHTML +=`<div class="row" >
            <div class="mt-2 mr-5">${i+1}</div>
            <div>
            <div>${track.title}</div>
            <div>${track.artist.name}</div>
            </div>
        </div>
        <div class="">${track.duration}</div>
             </div>
             </div>`
         }
        
    })
    .catch(err => console.log(err))}

    function getusername() {
        const username = localStorage.getItem('username')
        const btnusername = document.getElementById('username')
        btnusername.innerHTML = username
    }

    window.onload = () => {
    }

