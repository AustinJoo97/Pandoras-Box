// import/initialize necessary modules (mongoose and others) and tokens required to make call to spotify API


// establish function to get an array of all genres required to get albums to populate DB
const getGenres = async () => {
    let genresArray = [];

    return genresArray;
}


// establish function that will make API calls for each genre (genreID) to retrieve X number of albums then save each album to the database
const populateDB = async() => {
    let allGenres = await getGenres();

    const albums = await allGenres.map((genre) => {

    })

    successMessage();
}

const successMessage = () => console.log('Success!')