import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/AlbumPage.css';



const ViewAlbum = ({ album, artist }) => {

    const TrackList = () => {
        return album.songs.map(track => (
            <li>{track}</li>
        ))
    }

    return (
        <section id="album">
            <div className="row">
                <article id="albumInfo" className="col-4">
                    <img src={album.img} alt={album.title}></img>

                </article>
                <article id="trackList" className="col-6">
                    <h3>{album.title}</h3>
                    <Link to="./artist">
                        <p>{artist}</p>
                    </Link>
                    <p>Year released: {album.year}</p>
                    <p>Album popularity: {album.popularity}</p>
                    <p>Description: {album.description}</p>
                    <ol>
                        <TrackList />
                    </ol>
                </article>
            </div>
        </section>
    )

}

export default ViewAlbum;