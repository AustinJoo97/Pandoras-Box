export default getTwoFavoriteGenres = (userObj) => {
    let allGenres = [];
    let favoritesObj = {};

    userObj.favorites.map((favoritedAlbum) => {
        allGenres.concat(favoritedAlbum.genres);
    })

    allGenres.map((genre) => {
        if(favoritesObj[genre]){
            favoritesObj[genre] += 1;
        } else {
            favoritesObj[genre] = 1;
        }
    })

    return favoritesObj;
}