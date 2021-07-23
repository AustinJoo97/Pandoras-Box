// import/initialize necessary modules (mongoose and others) and tokens required to make call to spotify API
const db = require('../config/connection');
const { Album } = require('../models');


// establish function to get an array of all genres required to get albums to populate DB
const getGenres = async () => {
    // Array of genre IDs
    let genresArray = [];

    return genresArray;
}


// establish function that will make API calls for each genre (genreID) to retrieve X number of albums then save each album to the database
db.once('open', async () => {
    try {
      const allGenres = await getGenres();

      await Album.deleteMany({});
  
      await allGenres.map((genreID) => {
        //   Make api call for each genre ID
          const albumData = await fetch();

          albumData.map((album) => {
            await Album.create({
                _id: album.id,
                name: album.name,
                artisti: album.artist
            });
          })
      })
  
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('All done!');
    process.exit(0);
  });