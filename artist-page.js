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


        let artistimg = document.getElementById('artist-picture')
        console.log(artistimg)
        artistimg.style.backgroundImage = `url(${artist.picture_xl})`
       
        artistname.innerText = urlParams.get("artist-name")
        console.log(artist)

       let fans = document.getElementById("fans-number")
       fans.innerHTML = `${artist.nb_fan} monthly listener`


        fetchsong(songsurl)

    })
    .catch(err => console.log(err))}
    window.onload = ()=>{
        getAlbum();
    }

