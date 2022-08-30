const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a5e347aa3emsh83ddf0a8da0766ep13759cjsn26ffa1895f30',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
};

const getAlbum = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/75621062`, options)
    .then(response => response.json())
    .then(album => {
        let albumCover = document.getElementById("album-cover");
        let artistInfo = document.getElementById("artist")
      
            console.log(album)
            albumCover.innerHTML = `<img height="150vh" src=${album.cover_medium}
            alt="this is photo">`
            artistInfo.innerHTML = `<h6 class="text-white">album</h6>
            <h2 class="text-white">${album.title}</h2>
            <div class="d-flex">
            <img class="small-img" src=${album.artist.picture} 
             alt="photo">
             <h6 class="text-white"><strong>${album.artist.name}</strong>${album.duration} min</h6>`
        
      
    
    })
    .catch(err => console.log(err))}

