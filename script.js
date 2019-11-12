let Spotify = require('node-spotify-api');
let axios = require('axios');


let arg = process.argv[2];

function getSong(song) {
   
    let spotify = new Spotify({
        id: process.env.clientID,
        secret: process.env.clientSecret
    });
    
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }   
        console.log(data.tracks.items[0]); 
    });
}

// getSong(arg);

function getConcert(band) {
    ;(async () => {
        const response = await axios.get(`https://rest.bandsintown.com/artists/${band}/events?app_id=codingbootcamp`)
        console.log(response)
      })()
}

// getConcert(arg);

function getMovie(movie) {
    movie.replace(' ', '+');
    axios.get(`http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=trilogy`).then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  })
  .catch(function(error) {
    if (err) 
        console.log(err)
  });
}

getMovie(arg);