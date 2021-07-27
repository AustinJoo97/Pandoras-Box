import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/SearchPage.css';


const PopulateSearchResults = ({ queryResults, queryType }) => {
    // some management of how results will display here

    const ShowResults = ({ type }) => {

        // if type "artist", return artist cards
        if (type === "artist") {

            return queryResults.artists.items.map(artist => (
                <div key={artist.id} className="album-card col-2">
                    <h6>{artist.type}</h6>
                    <Link to={`/artist?q=${artist.id}`}>
                        <img src={artist.images[0].url} alt="hi"></img>
                    </Link>
                    <h3>{artist.name}</h3>
                    <p>{artist.popularity}/100</p>
                    <p>{artist.followers.total} Followers</p>
                </div>
            ))

            // if type "album", return album cards
        } else if (type === "album") {

            return queryResults.items.map(album => (
                <div key={album.id} className="album-card col-2">
                    <Link to={`/album?q=${album.id}`}>
                        <img src={album.images[0].url} alt="hi"></img>
                    </Link>
                    <h3 className="">{album.name}</h3>
                    <p>Year released: {album.release_date}</p>
                    <p>Total tracks: {album.total_tracks}</p>
                </div>
            ))

        } else {
            return (
                <h2>genre search WIP</h2>
            )
        }

    }

    return (

        <div className="row justify-content-start">
            <ShowResults type={queryType} />
        </div>
    )
}

export default PopulateSearchResults;