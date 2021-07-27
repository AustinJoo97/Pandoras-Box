import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/SearchPage.css';


const PopulateSearchResults = ({ queryResults }) => {
    // some management of how results will display here

    const ShowResults = () => {

        return queryResults.map(album => (
            <div id="albumCard" className="col-2">

                {/* Link will probably redirect to "/albums/{album.albumID}" */}
                <Link to="/album">
                    <img src={album.img} alt={album.title}></img>
                    <h3 className="">{album.title}</h3>
                    <p>Year released: {album.year}</p>
                    <p>Album popularity: {album.popularity}</p>
                </Link>
            </div>
        ))


    }

    return (
        <div className="search-results row">
            <ShowResults />
        </div>
    )
}

export default PopulateSearchResults;