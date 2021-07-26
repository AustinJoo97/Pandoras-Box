import React from 'react';
import { Link } from 'react-router-dom';
import { BsChatDots, BsHeart } from "react-icons/bs"


import '../../styles/AlbumPage.css';



const ViewAlbum = ({ album, artist }) => {

    // add all genres
    const DisplayGenres = () => {
        let allGenres = [];
        album.genres.forEach(genre => {
            if (allGenres.length === 0) {
                allGenres = genre
            } else {
                allGenres += `, ${genre}`;
            }
        })
        return (
            <p>{allGenres}</p>
        )
    }

    // will most likely itterate a track length as well
    const TrackList = () => {
        return album.songs.map((track, idx) => (
            <div>
                <span>{idx + 1}. </span>
                <p>{track}</p>
            </div>
        ))
    }

    return (
        <section id="album">
            <div className="row d-flex">

                <article id="albumHero" className="row justify-content-md-around">

                    {/* album cover, icons, and fav/comments stats */}
                    <section className="col-4 justify-content-center art-card">
                        <img src={album.img} alt={album.title}></img>
                        <div>
                            <span>0 favorites </span>
                            <span>0 comments</span>
                        </div>
                        <div className="icon-bar">
                            <button>
                                <BsHeart />
                            </button>
                            <button>
                                <BsChatDots />
                            </button>
                        </div>
                    </section>

                    {/* album information */}
                    <section id="albumInfo" className="col-8">
                        <h3 id="albumTitle" className="">{album.title}</h3>

                        <div>
                            <span>Artist:</span>
                            <Link className="artist-link" to="./artist">
                                <p>{artist}</p>
                            </Link>
                        </div>

                        <div>
                            <span>Release type:</span>
                            <p>{album.releaseType}</p>
                        </div>

                        <div>
                            <span>Year released:</span>
                            <p>{album.year}</p>
                        </div>

                        <div>
                            <span>Genres:</span>
                            <DisplayGenres />
                        </div>

                        <div>
                            <span>Album popularity:</span>
                            <p>{album.popularity}</p>
                        </div>

                        <div>
                            <span>Description:</span>
                            <p>{album.description}</p>
                        </div>

                    </section>
                </article>

                {/* track list */}
                <article id="trackList" className="row justify-content-center">
                    <section className="col-10">
                        <h3>Track list</h3>
                        <TrackList />
                    </section>
                </article>
            </div>
        </section>
    )

}

export default ViewAlbum;