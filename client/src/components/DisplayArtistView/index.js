import React from 'react';
import '../../styles/ArtistPage.css';


const ViewArtist = ({ artist }) => {

    // map through all albums and create card for them
    const ShowAlbums = () => {
        if (artist.albums.length) {
            return artist.albums.map(album => (
                <div className="col-3 albumCard">
                    <img src={album.img} alt={album.title}></img>
                    <span className="">{album.title}</span>
                    <span> - {album.year}</span>
                    <p>Album popularity: {album.popularity}</p>
                </div>
            ))
        }

        return <p>nothing found here</p>;
    }

    
    return(
        <section id="artist">
            <div className="row">

                {/* artist info */}
                <article id="artistProfile" className="col-4">
                    <img src={artist.img} alt="the beebles"></img>
                    <h2 className="display-3">{artist.artistName}</h2>
                    <p className="text-muted"> {artist.bio}</p>
                    <p>Artist popularity: {artist.popularity}</p>
                </article>

                {/* artist discography */}
                <article className="col-8 discography">
                    <h2>{artist.artistName}'s discography</h2>
                    <section className="row">
                        <ShowAlbums />
                    </section>
                </article>
                
                
            </div>
        </section>
    )
}

export default ViewArtist;