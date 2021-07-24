import React from 'react';
import '../../styles/ArtistPage.css';


const ViewArtist = ({ artist }) => {

    // map through all albums and create card for them
    const ShowAlbums = () => {
        if (artist.albums.length) {
            return artist.albums.map(album => (
                <div id="albumCard" className="col-4">
                    <img src={album.img} alt={album.title}></img>
                    <h3 className="">{album.title}</h3>
                    <p>Year released: {album.year}</p>
                    <p>Album popularity: {album.popularity}</p>
                </div>
            ))
        }

        return <p>nothing found here</p>;
    }

    // display artist and return albums
    return(
        <section id="artist">
            <div className="row">
                <article id="artistProfile" className="col-4">
                    <img src={artist.img} alt="the beebles"></img>
                    <h2 className="display-3">{artist.artistName}</h2>
                    <p className="text-muted"> {artist.bio}</p>
                    <p>Artist popularity: {artist.popularity}</p>
                </article>
                <article className="col-8">
                    <div className="row">
                        <ShowAlbums />
                    </div>
                </article>
                
                
            </div>
        </section>
    )
}

export default ViewArtist;