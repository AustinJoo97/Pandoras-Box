import React from 'react';
import { Link } from 'react-router-dom';
import { BsChatDots, BsHeart } from "react-icons/bs"
import { Container, Col, Card, Row, Button} from "react-bootstrap";

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
        <Container id="album">
            <Row className="d-flex">

                <Row id="albumHero" className="justify-content-md-around">

                    {/* album cover, icons, and fav/comments stats */}
                    <Col lg="4" className=" art-card ">
                        <Card className="art-card bg-lightblue">
                            <Card.Body className=" justify-content-center bg-lightblue art-card ">
                                <Card.Img 
                                    className="card-img-top"
                                    src={album.img}
                                    alt={album.title}
                                />
                                
                                <div className="mt-2">
                                    <span>0 favorites </span>
                                    <span>0 comments</span>
                                </div>
                                <div className="icon-bar">
                                    <Button className="mx-1">
                                        <BsHeart />
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

                    </Col>
                </Row>

                {/* track list */}
                <Row id="trackList" className=" justify-content-center mt-5">
                    <section className="col-10">
                        <h2 className="mx-3">Track list</h2>
                        <TrackList />
                    </section>
                </Row>
            </Row>
        </Container>
    )

}

export default ViewAlbum;