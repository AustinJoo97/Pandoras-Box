export default getTwoFavoriteGenres = (userObj) => {
    let allGenres = [];
    let favoritesObj = {};
    let topGenre;
    let secondGenre;

    userObj.favorites.map((favoritedAlbum) => {
        allGenres.push(favoritedAlbum.genre);
    })

    allGenres.map((genre) => {
        if(favoritesObj[genre]){
            favoritesObj[genre] += 1;
        } else {
            favoritesObj[genre] = 1;
        }
    })

    for(let i = 0; i < allGenres.length; i++){
        if(!topGenre && !secondGenre){
            topGenre = {
                genre: allGenres[i],
                count: favoritesObj[allGenres[i]]
            };
            secondGenre = {
                genre: allGenres[i],
                count: favoritesObj[allGenres[i]]
            };
        }

        if(favoritesObj[allGenres[i]] >= topGenre.count){
            secondGenre = topGenre;
            topGenre = {
                genre: allGenres[i],
                count: favoritesObj[allGenres[i]]
            };
        } else if(favoritesObj[allGenres[i]] < topGenre.count && favoritesObj[allGenres[i]] > secondGenre.count){
            secondGenre = {
                genre: allGenres[i],
                count: favoritesObj[allGenres[i]]
            };
        }
    }

    return { topGenre, secondGenre }
}