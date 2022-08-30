const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a5e347aa3emsh83ddf0a8da0766ep13759cjsn26ffa1895f30',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
};

const getAlbum = (id) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/queen/${id}`, options)
    .then(response => response.json())
    .then(songs => {
        for (let i = 0; i < songs.length; i++) {
            const song = songs[i];
            
        }
    })
    .catch(err => console.log(err))}