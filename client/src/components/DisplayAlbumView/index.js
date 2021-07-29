import React from 'react';
import { Link } from 'react-router-dom';
import { BsChatDots, BsHeart } from "react-icons/bs"
import { Container, Col, Card, Row, Button } from "react-bootstrap";
import { useMutation } from '@apollo/client';

import '../../styles/AlbumPage.css';

import { ADD_NEW_FAVORITE } from '../../utils/mutations';

// add all genres
const DisplayGenres = ({ album }) => {
    let allGenres = [];

    if (!album.genres) {
        return <p>none listed</p>;
    }

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
const TrackList = ({ album }) => {
    console.log(album)
    return album.tracks.items.map((track, idx) => (
        <div>
            <span>{idx + 1}. </span>
            <p>{track.name}</p>
        </div>
    ))
}

const ViewAlbum = ({ album }) => {
    const [addNewFavorite, { error }] = useMutation(ADD_NEW_FAVORITE);

    const handleAddFavorite = async () => {
        console.log(album);
    
        try {
          const { data } = await addNewFavorite({
            // variables: {...album}
            variables: { 
                albumID: album.id
            },
          });
    
        } catch (e) {
          console.error(e);
        }
    };

    if (!album.artists) return null;
    console.log(album);
    return (
        <Container id="album">
            <Row className="d-flex">

                <Row id="albumHero" className="justify-content-md-around">

                    {/* album cover, icons, and fav/comments stats */}
                    <Col lg="4" className=" art-card ">
                        <Card className="art-card bg-lightblue">
                            <Card.Body className=" justify-content-center bg-lightblue art-card ">
                                <Card.Img
                                    className="card-img-top"
                                    src={album.images[0].url}
                                    alt={album.name}
                                    name={album.id}
                                />

                                <div className="mt-2">
                                    <span>0 favorites </span>
                                    <span>0 comments</span>
                                </div>
                                <div className="icon-bar">
                                    <Button className="mx-1">
                                        <BsHeart 
                                        onClick={handleAddFavorite}/>
                                    </Button>
                                    <Button className="mx-1">
                                        <BsChatDots />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* album information */}
                    <Col lg="8" id="albumInfo">

                        <h3 id="albumTitle" className="">{album.name}</h3>

                        <div>
                            <span>Artist:</span>
                            <Link className="artist-link" to={`/artist?q=${album.artists[0].id}`}>
                                <p>{album.artists[0].name}</p>
                            </Link>
                        </div>

                        <div>
                            <span>Release type:</span>
                            <p>{album.album_type}</p>
                        </div>

                        <div>
                            <span>released:</span>
                            <p>{album.release_date}</p>
                        </div>

                        <div>
                            <span>Genres:</span>
                            {/* <DisplayGenres /> */}
                        </div>

                        <div>
                            <span>Album popularity:</span>
                            <p>{album.popularity}</p>
                        </div>

                        <div>
                            <span>Record Label:</span>
                            <p>{album.label}</p>
                        </div>

                    </Col>
                </Row>

                {/* track list */}
                <Row id="trackList" className=" justify-content-center mt-5">
                    <section className="col-10">
                        <h2 className="mx-3">Track list</h2>
                        <TrackList album={album} />
                    </section>
                </Row>
            </Row>
        </Container>
    )

}

export default ViewAlbum;